import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, { count: number; expires: number }>()

const controlCharPattern = /[\u0000-\u001F\u007F]/g

const contactSchema = z.object({
  name: z.string().trim().max(120).optional(),
  firstName: z.string().trim().max(60).optional(),
  lastName: z.string().trim().max(60).optional(),
  email: z.string().trim().email().max(190),
  company: z.string().trim().max(160).optional(),
  timeline: z.string().trim().max(120).optional(),
  services: z.string().trim().max(240).optional(),
  message: z.string().trim().min(10, 'Please provide a bit more detail in your message.').max(2000),
  budget: z.string().trim().max(120).optional(),
  honeypotField: z.string().optional(),
}).superRefine((data, ctx) => {
  const named = data.name?.length
  const splitName = `${data.firstName ?? ''}${data.lastName ?? ''}`.trim().length > 0

  if (!named && !splitName) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Name is required.',
      path: ['name'],
    })
  }
})

function sanitize(value?: string | null) {
  return value ? value.replace(controlCharPattern, ' ').trim() : undefined
}

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() ?? 'unknown'
  }
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp.trim()
  }
  return 'unknown'
}

function isRateLimited(identifier: string) {
  const now = Date.now()
  if (rateLimitStore.size > 1000) {
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.expires < now) {
        rateLimitStore.delete(key)
      }
    }
  }
  const entry = rateLimitStore.get(identifier)

  if (!entry || entry.expires < now) {
    rateLimitStore.set(identifier, { count: 1, expires: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count += 1
  if (entry.count > RATE_LIMIT_MAX) {
    return true
  }

  rateLimitStore.set(identifier, entry)
  return false
}

function isAllowedOrigin(request: NextRequest) {
  const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean)

  if (!allowedOrigins.length) {
    return true
  }

  const originHeader = request.headers.get('origin')
  if (originHeader && allowedOrigins.includes(originHeader)) {
    return true
  }

  const referer = request.headers.get('referer')
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin
      if (allowedOrigins.includes(refererOrigin)) {
        return true
      }
    } catch {
      return false
    }
  }

  return false
}

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const identifier = getClientIdentifier(request)
    if (isRateLimited(identifier)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid submission', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    if (parsed.data.honeypotField) {
      return NextResponse.json({ message: 'Thank you' }, { status: 200 })
    }

    const missingVars: string[] = []
    if (!process.env.EMAILJS_SERVICE_ID) missingVars.push('EMAILJS_SERVICE_ID')
    if (!process.env.EMAILJS_TEMPLATE_ID) missingVars.push('EMAILJS_TEMPLATE_ID')
    if (!process.env.EMAILJS_USER_ID) missingVars.push('EMAILJS_USER_ID')

    if (missingVars.length > 0) {
      return NextResponse.json(
        { error: `Missing environment variables: ${missingVars.join(', ')}` },
        { status: 500 }
      )
    }

    const sanitized = {
      fullName:
        sanitize(parsed.data.name) ||
        [sanitize(parsed.data.firstName), sanitize(parsed.data.lastName)]
          .filter(Boolean)
          .join(' ')
          .trim(),
      email: sanitize(parsed.data.email),
      company: sanitize(parsed.data.company) ?? 'Not provided',
      timeline: sanitize(parsed.data.timeline) ?? 'Not specified',
      services: sanitize(parsed.data.services) ?? 'Not specified',
      message: sanitize(parsed.data.message) ?? 'No message provided',
    }

    if (!sanitized.fullName) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const emailData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: {
        from_name: sanitized.fullName,
        from_email: sanitized.email,
        company: sanitized.company,
        timeline: sanitized.timeline,
        services: sanitized.services,
        message: sanitized.message,
        to_email: 'info@momentumlegalpc.com',
      },
    }

    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      return NextResponse.json(
        { error: 'Failed to send message.', providerMessage: errorText.slice(0, 200) },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
