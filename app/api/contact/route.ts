import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, timeline, services, message, firstName, lastName } = body

    // Validate required fields
    if (!email || (!name && (!firstName || !lastName))) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Format the name
    const fullName = name || `${firstName} ${lastName}`.trim()

    // Create email content
    const emailContent = `
New Contact Form Submission from Momentum Legal Website

Contact Information:
- Name: ${fullName}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Timeline: ${timeline || 'Not specified'}
- Services: ${services || 'Not specified'}

Message:
${message || 'No message provided'}

---
This email was sent from the Momentum Legal website contact form.
    `.trim()

    // Check environment variables
    console.log('Environment variables:', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID
    })

    // Validate required environment variables
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_USER_ID) {
      console.error('Missing EmailJS environment variables')
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // EmailJS API call with correct format
    const emailData = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: {
        from_name: fullName,
        from_email: email,
        company: company || 'Not provided',
        timeline: timeline || 'Not specified',
        services: services || 'Not specified',
        message: message || 'No message provided',
        to_email: 'info@momentumlegalpc.com'
      }
    }

    console.log('Sending email with data:', emailData)
    
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })

    console.log('EmailJS response status:', emailResponse.status)
    
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('EmailJS error:', errorText)
      return NextResponse.json(
        { error: `Failed to send email: ${errorText}` },
        { status: 500 }
      )
    }
    
    const responseData = await emailResponse.text()
    console.log('EmailJS success response:', responseData)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
