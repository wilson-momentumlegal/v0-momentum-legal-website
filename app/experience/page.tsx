"use client"

import { ArrowRight, Check, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"

const stats = [
  { value: "$1.80B+", label: "Aggregate disclosed value" },
  { value: "13", label: "Selected transactions" },
  { value: "$2M–$1B", label: "Disclosed matter range" },
]

const matters = [
  { value: "$1B", title: "All-stock biotechnology sale", type: "Sell-side M&A" },
  { value: "$225M", title: "Strategic acquisition", type: "Buy-side M&A" },
  { value: "$46M", title: "Series B investment", type: "Investor counsel" },
  { value: "$20M", title: "AI platform financing", type: "Company counsel" },
]

const principles = [
  ["Clear priorities", "We identify what matters, what can wait, and where legal work changes the outcome."],
  ["Responsive execution", "We keep documents, diligence, and decision-makers moving toward the same deadline."],
  ["Senior attention", "Clients receive direct, commercially grounded advice across the life of the matter."],
  ["Practical risk judgment", "We protect the downside without losing sight of leverage, timing, or the relationship."],
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navigation currentPage="experience" />

      <section className="bg-black px-6 pb-24 pt-40 text-white lg:px-12 lg:pb-32 lg:pt-48">
        <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Representative matters</p>
            <h1 className="max-w-5xl text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl">
              Experience calibrated for <span className="font-medium">consequential moments.</span>
            </h1>
          </motion.div>
          <motion.p
            className="max-w-xl text-lg font-light leading-relaxed text-gray-300 lg:col-span-4 lg:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            Disciplined execution across M&amp;A, venture and growth financings, and strategic transactions for companies, funds, and institutional investors.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 border-y border-gray-300 sm:grid-cols-3">
            {stats.map((item, index) => (
              <div key={item.label} className={`py-9 sm:px-8 ${index > 0 ? "border-t border-gray-300 sm:border-l sm:border-t-0" : ""}`}>
                <p className="mb-2 text-4xl font-medium tracking-tight lg:text-5xl">{item.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-gray-500">
            Includes matters completed by the firm&apos;s founder while practicing at other law firms.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Transaction experience</p>
            <h2 className="mb-6 text-4xl font-light tracking-tight lg:text-6xl">Execution on both sides of the table.</h2>
            <p className="text-lg font-light leading-relaxed text-gray-600 lg:text-xl">
              Experience includes company-side and investor-side matters from initial diligence and negotiation through approvals, signing, and closing.
            </p>
          </div>

          <div className="grid gap-px bg-gray-300 lg:grid-cols-2">
            <article className="bg-white p-8 lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Mergers &amp; acquisitions</p>
              <h3 className="mb-8 text-3xl font-medium">Control of the details from diligence through closing.</h3>
              <div className="mb-9 grid grid-cols-3 gap-4 border-y border-gray-200 py-7">
                <div><strong className="block text-2xl">$1.56B</strong><span className="text-xs text-gray-500">Aggregate value</span></div>
                <div><strong className="block text-2xl">5</strong><span className="text-xs text-gray-500">Selected matters</span></div>
                <div><strong className="block text-2xl">$16M–$1B</strong><span className="text-xs text-gray-500">Value range</span></div>
              </div>
              <p className="font-light leading-relaxed text-gray-600">Buy-side and sell-side support across definitive agreements, disclosure schedules, specialist workstreams, approvals, signing, and closing.</p>
            </article>

            <article className="bg-gray-950 p-8 text-white lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Venture &amp; growth financings</p>
              <h3 className="mb-8 text-3xl font-medium">Fluent on both sides of the financing table.</h3>
              <div className="mb-9 grid grid-cols-2 gap-4 border-y border-white/20 py-7">
                <div><strong className="block text-3xl">$240M</strong><span className="text-xs text-gray-400">Aggregate value</span></div>
                <div><strong className="block text-3xl">8</strong><span className="text-xs text-gray-400">Selected financings</span></div>
              </div>
              <p className="mb-6 font-light leading-relaxed text-gray-300">Seed, Series A, Series B, Series C, Series D, and growth equity transactions.</p>
              <p className="text-sm text-gray-400">Company counsel · Investor counsel · Diligence · NVCA documents · Closing coordination</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Illustrative matters</p>
              <h2 className="text-4xl font-light tracking-tight lg:text-6xl">Selected transactions.</h2>
            </div>
            <p className="max-w-lg text-base font-light leading-relaxed text-gray-600">Representative sectors include technology, sports, healthcare, biopharma, franchising, professional services, enterprise software, and consumer products.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {matters.map((matter) => (
              <article key={matter.title} className="flex min-h-64 flex-col justify-between border border-gray-200 bg-white p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{matter.type}</span>
                <div>
                  <p className="mb-3 text-4xl font-medium tracking-tight">{matter.value}</p>
                  <h3 className="text-lg font-light leading-snug text-gray-700">{matter.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-5xl text-xs leading-relaxed text-gray-500">
            Representative prior experience of Momentum Legal&apos;s founder. Certain matters were completed while practicing at other law firms. Transaction values reflect publicly disclosed or otherwise permitted information. Past results do not guarantee a similar outcome.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">How we work</p>
            <h2 className="text-4xl font-light tracking-tight lg:text-5xl">Business-first counsel, delivered with clarity and speed.</h2>
          </div>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {principles.map(([title, description]) => (
              <div key={title} className="border-t border-gray-300 pt-6">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-medium"><Check className="h-5 w-5 text-emerald-600" />{title}</h3>
                <p className="font-light leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Start a conversation</p>
            <h2 className="text-4xl font-light tracking-tight lg:text-6xl">Bring us the transaction or growth decision in front of you.</h2>
          </div>
          <a href="/contact" className="inline-flex w-fit items-center gap-3 bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
            Discuss a Transaction <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-black px-6 py-10 text-gray-400 lg:px-12">
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-6 text-sm sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Momentum Legal, P.C. · Attorney Advertising</p>
          <div className="flex items-center gap-6">
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="https://www.linkedin.com/company/momentum-legal-p-c/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="Momentum Legal on LinkedIn" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
