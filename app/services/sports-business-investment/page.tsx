import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Navigation } from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Sports Business & Investment Counsel | Momentum Legal",
  description:
    "Corporate, investment, and commercial counsel for sports technology companies, investors, emerging leagues, and businesses shaping the sports economy.",
  alternates: { canonical: "/services/sports-business-investment" },
  openGraph: {
    title: "Sports Business & Investment Counsel | Momentum Legal",
    description:
      "Corporate, investment, and commercial counsel for companies and investors shaping the future of sports.",
    url: "/services/sports-business-investment",
    type: "website",
  },
}

const sectors = [
  {
    id: "sports-technology",
    number: "01",
    title: "Sports Technology & Wearables",
    description:
      "We advise companies developing and commercializing technologies that are transforming how sports are played, experienced, and analyzed. Our focus includes performance technology, wearable devices, biometrics, AI-powered analytics, connected fitness, software platforms, and sports data businesses.",
    services: [
      "Venture capital and growth financings",
      "Technology licensing and commercialization",
      "SaaS and commercial agreements",
      "Strategic partnerships and joint ventures",
      "Mergers and acquisitions",
    ],
  },
  {
    id: "sports-investment",
    number: "02",
    title: "Sports Investment & Private Capital",
    description:
      "We advise investors, funds, strategic acquirers, and growth companies pursuing investment and acquisition opportunities across the sports economy. Our corporate and transactional experience supports clients navigating investments, ownership arrangements, strategic transactions, and portfolio company matters.",
    services: [
      "Private equity and venture investments",
      "Minority and strategic investments",
      "Mergers and acquisitions",
      "Transaction structuring and due diligence",
      "Corporate governance and investor rights",
    ],
  },
  {
    id: "emerging-leagues",
    number: "03",
    title: "Emerging Leagues & Sports Ventures",
    description:
      "We advise founders, operators, investors, and emerging sports ventures developing new competitions, leagues, and business models. From entity formation and capitalization to commercial partnerships and governance, we help clients establish the legal and transactional foundations for growth.",
    services: [
      "Entity formation and corporate structuring",
      "Equity financing and capitalization",
      "Ownership and governance arrangements",
      "Strategic partnerships and joint ventures",
      "Commercial agreements and outside general counsel",
    ],
  },
  {
    id: "sports-commercialization",
    number: "04",
    title: "Sports Media, Data & Commercialization",
    description:
      "We advise businesses commercializing sports-related media, data, technology, content, and intellectual property. Our work focuses on the commercial transactions and strategic relationships that enable companies to develop, distribute, license, and monetize sports-related products and services.",
    services: [
      "Sponsorship and strategic partnership agreements",
      "Technology and data licensing",
      "Media and content commercialization",
      "Intellectual property licensing agreements",
      "Commercial contracts and joint ventures",
    ],
  },
]

const capabilities = [
  { title: "Mergers & Acquisitions", href: "/services/corporate-venture" },
  { title: "Venture Capital & Growth Financings", href: "/services/corporate-venture" },
  { title: "Private Investments", href: "/services/corporate-venture" },
  { title: "Joint Ventures & Strategic Transactions", href: "/services/corporate-venture" },
  { title: "Corporate Governance", href: "/services/corporate-venture" },
  { title: "Technology & Data Agreements", href: "/services/commercial-technology" },
  { title: "Licensing & Sponsorships", href: "/services/commercial-technology" },
  { title: "Strategic Commercial Partnerships", href: "/services/commercial-technology" },
  { title: "Commercial Contracts", href: "/services/commercial-technology" },
  { title: "Outside General Counsel", href: "/services/corporate-venture" },
]

export default function SportsBusinessInvestmentPage() {
  return (
    <div className="min-h-full overflow-x-hidden bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="services" />

      <main>
        <section className="relative flex min-h-[84vh] items-end overflow-hidden pt-20 text-white">
          <Image
            src="/professional-sports-stadium-with-dramatic-lighting.jpg"
            alt="Modern sports venue architecture illuminated at night"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />
          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pb-14 pt-28 lg:px-12 lg:pb-20">
            <Link href="/services" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">Sports Business &amp; Investment</p>
            <h1 className="max-w-5xl text-5xl font-light leading-none tracking-tight lg:text-7xl">
              Counsel for the <span className="font-medium">Business of Sport.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-light leading-relaxed text-gray-100 lg:text-xl">
              Corporate, investment, and commercial counsel for companies and investors shaping the future of sports.
            </p>
            <p className="mt-4 max-w-3xl font-light leading-relaxed text-gray-300 lg:text-lg">
              From emerging sports technologies to private capital and new leagues, Momentum Legal helps clients structure, finance, and execute the transactions driving the sports economy.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 bg-white px-7 py-4 text-sm font-medium text-black transition-colors hover:bg-gray-200">
              Discuss a Sports Business Matter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Overview</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">Where Sports, Technology &amp; Capital Meet.</h2>
            </div>
            <p className="text-lg font-light leading-relaxed text-gray-600 lg:col-span-7 lg:col-start-6 lg:text-xl">
              The sports industry is evolving through new technologies, investment models, emerging competitions, and commercial opportunities. Momentum Legal advises the companies, founders, investors, and operators behind that evolution, providing practical counsel across corporate transactions, financing, strategic partnerships, and commercial matters.
            </p>
          </div>
        </section>

        <section className="bg-gray-100 py-20 lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <div className="mb-14 max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Sectors We Serve</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">Focused on the Evolving Sports Economy.</h2>
            </div>

            <div className="border-y border-gray-300">
              {sectors.map((sector) => (
                <article id={sector.id} key={sector.id} className="scroll-mt-28 border-b border-gray-300 py-12 last:border-b-0 lg:py-16">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-4">
                      <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-gray-400">{sector.number}</p>
                      <h3 className="text-2xl font-medium tracking-tight lg:text-3xl">{sector.title}</h3>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-6">
                      <p className="text-lg font-light leading-relaxed text-gray-600">{sector.description}</p>
                      <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {sector.services.map((service) => (
                          <li key={service} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-20 text-white lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <div className="mb-12 max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Legal Capabilities</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">Transactional Counsel Across the Sports Ecosystem.</h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-gray-300">
                Our sports industry practice draws on Momentum Legal&apos;s core corporate and transactional capabilities to support companies and investors at every stage of growth and investment.
              </p>
            </div>
            <div className="grid grid-cols-1 border-y border-white/20 md:grid-cols-2">
              {capabilities.map((capability, index) => (
                <Link
                  key={capability.title}
                  href={capability.href}
                  className={`group flex items-center justify-between gap-4 py-6 md:px-7 ${index % 2 === 0 ? "md:border-r" : ""} ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""} border-white/20`}
                >
                  <span className="font-light text-gray-200">{capability.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Who We Serve</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">Built for Companies, Investors &amp; Operators.</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg font-light leading-relaxed text-gray-600 lg:text-xl">
                Momentum Legal serves businesses and investors operating throughout the evolving sports economy, including sports technology companies, venture-backed startups, private investment funds, strategic acquirers, emerging league operators, and businesses commercializing sports-related intellectual property.
              </p>
              <p className="mt-8 border-l-2 border-gray-900 pl-6 text-sm font-light leading-relaxed text-gray-500">
                Additional sports-related commercial experience includes sponsorship, endorsement, licensing, and name, image, and likeness arrangements.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20 text-center lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <h2 className="mx-auto max-w-4xl text-4xl font-light tracking-tight lg:text-6xl">Let&apos;s Build What&apos;s Next in Sport.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-gray-600">
              Whether you&apos;re financing a sports technology company, evaluating an investment, structuring a new venture, or negotiating a strategic commercial relationship, Momentum Legal can help you move forward.
            </p>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-black px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Discuss a Sports Business Matter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-black py-10 text-white">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-5 px-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© 2026 Momentum Legal. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/services" className="hover:text-white">All Services</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/experience" className="hover:text-white">Representative Matters</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
