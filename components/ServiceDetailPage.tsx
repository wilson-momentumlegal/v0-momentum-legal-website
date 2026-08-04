import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import type { ServicePageData } from "@/lib/service-page-data"

export function ServiceDetailPage({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-full overflow-x-hidden bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="services" />

      <main>
        <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-20 text-white">
          <Image src={data.heroImage} alt={data.heroAlt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
          <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pb-16 pt-28 lg:px-12 lg:pb-20">
            <Link href="/services" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">{data.eyebrow}</p>
            <h1 className="max-w-5xl text-5xl font-light leading-none tracking-tight lg:text-7xl">{data.title}</h1>
            <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-gray-200 lg:text-xl">{data.description}</p>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Who we serve</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">Counsel aligned to the objective.</h2>
            </div>
            <p className="text-lg font-light leading-relaxed text-gray-600 lg:col-span-7 lg:col-start-6 lg:text-xl">{data.audience}</p>
          </div>
        </section>

        <section className="bg-gray-100 py-20 lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Capabilities</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">How Momentum Legal can help.</h2>
            </div>
            <div className="grid grid-cols-1 border-y border-gray-300 md:grid-cols-2">
              {data.capabilities.map((capability, index) => (
                <div key={capability.title} className={`py-9 md:px-8 ${index % 2 === 0 ? "md:border-r" : ""} ${index > 1 ? "border-t" : index > 0 ? "border-t md:border-t-0" : ""} border-gray-300`}>
                  <h3 className="mb-3 text-xl font-medium">{capability.title}</h3>
                  <p className="font-light leading-relaxed text-gray-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Representative matters</p>
              <h2 className="text-3xl font-light tracking-tight lg:text-5xl">Work shaped around real decisions.</h2>
            </div>
            <div className="space-y-5 lg:col-span-7 lg:col-start-6">
              {data.matters.map((matter) => (
                <div key={matter} className="flex items-start gap-4 border-b border-gray-200 pb-5 text-lg">
                  <Check className="mt-1 h-5 w-5 shrink-0" />
                  <span>{matter}</span>
                </div>
              ))}
              <p className="pt-3 text-xs leading-relaxed text-gray-500">Representative matter types only. Prior matters may have been completed at prior firms. Past results do not guarantee a similar outcome.</p>
            </div>
          </div>
        </section>

        <section className="bg-black py-20 text-white lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 text-center lg:px-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Start a conversation</p>
            <h2 className="mx-auto max-w-4xl text-4xl font-light tracking-tight lg:text-6xl">Discuss the matter in front of you.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-gray-300">Tell us what you are building, financing, negotiating, or protecting. We typically respond within one business day.</p>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-gray-200">
              Request an Introductory Call
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
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
