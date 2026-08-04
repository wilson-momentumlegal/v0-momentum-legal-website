"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Linkedin, MapPin, Instagram } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"

export default function MomentumLegalV2() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    if (honeypot) {
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: contactForm.firstName,
          lastName: contactForm.lastName,
          email: contactForm.email,
          company: contactForm.company,
          message: contactForm.message,
          honeypotField: honeypot,
        }),
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unexpected error occurred' }))
        throw new Error(error?.error ?? 'Unable to send your message right now.')
      }

      setIsSubmitted(true)
      setContactForm({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      })
      setHoneypot('')
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-full overflow-x-hidden bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section id="home" className="pt-20 relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/High Rise Image.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-screen-2xl lg:p-12 mx-auto pt-6 px-6 pb-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-screen">
            {/* Left Column - Text */}
            <motion.div 
              className="lg:col-span-5 flex flex-col justify-center text-white"
              variants={stagger}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-flex gap-2 w-fit text-xs font-medium text-black bg-white/80 backdrop-blur-sm pt-2 pr-4 pb-2 pl-4 items-center"
                  variants={fadeUp}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  Corporate · Commercial · Investor Counsel
                </motion.div>

                <div className="space-y-6">
                  <motion.h1 
                    className="lg:text-7xl leading-none text-5xl font-light text-white tracking-tight"
                    variants={fadeUp}
                  >
                    Counsel for<br />
                    <span className="font-medium">Companies &amp; Investors</span>
                  </motion.h1>

                  <motion.p
                    className="max-w-xl text-2xl font-medium leading-tight text-white lg:text-3xl"
                    variants={fadeUp}
                  >
                    When the stakes are high and momentum matters.
                  </motion.p>

                  <motion.p 
                    className="text-lg lg:text-xl font-light leading-relaxed max-w-lg text-gray-200"
                    variants={fadeUp}
                  >
                    Momentum Legal advises founders, growth companies, funds, and strategic investors on financings, M&amp;A, commercial agreements, and ongoing corporate matters.
                  </motion.p>

                  <motion.p 
                    className="text-sm lg:text-base font-light leading-relaxed max-w-lg text-gray-300"
                    variants={fadeUp}
                  >
                    Practical, business-first guidance designed to protect the downside, preserve momentum, and keep the commercial objective in view.
                  </motion.p>
                </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeUp}
                >
                  <motion.button 
                    onClick={() => window.location.href = '/contact'}
                    className="px-8 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Discuss a Transaction</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    className="border px-8 py-4 text-sm font-medium transition-colors border-white/50 hover:border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Corporate Services
                  </motion.button>
                </motion.div>

              </div>
            </motion.div>

          </div>  
        </div>
      </section>

      {/* Audience Pathways */}
      <section aria-labelledby="audience-heading" className="bg-gray-50 py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">Choose your path</p>
            <h2 id="audience-heading" className="text-3xl lg:text-5xl font-light tracking-tight text-gray-900">
              Counsel aligned to your side of the table.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-gray-300">
            <motion.a
              href="/services#corporate-venture"
              className="group py-12 lg:pr-14 lg:border-r border-gray-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-5">FOR COMPANIES</p>
                  <h3 className="text-3xl font-medium text-gray-900 mb-6">Build, finance, transact, and scale.</h3>
                  <p className="text-lg font-light leading-relaxed text-gray-600 max-w-xl">
                    Formation, governance, founder equity, venture financings, M&amp;A, commercial contracts, and fractional general counsel.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 shrink-0 text-gray-500 group-hover:translate-x-1 group-hover:text-black transition-all" />
              </div>
            </motion.a>

            <motion.a
              href="/services#corporate-venture"
              className="group py-12 lg:pl-14 border-t lg:border-t-0 border-gray-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-5">FOR INVESTORS</p>
                  <h3 className="text-3xl font-medium text-gray-900 mb-6">Diligence, negotiate, and close with confidence.</h3>
                  <p className="text-lg font-light leading-relaxed text-gray-600 max-w-xl">
                    Investor-side diligence, financing documents, governance, follow-on transactions, portfolio matters, and strategic exits.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 shrink-0 text-gray-500 group-hover:translate-x-1 group-hover:text-black transition-all" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black pt-24 pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div
              className="mb-14 max-w-3xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Our services</p>
              <h2 className="mb-6 text-3xl font-light tracking-tight text-white lg:text-5xl">
                Counsel structured around your objectives.
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-300 lg:text-xl">
                Business-first counsel across transactions, commercial relationships, and strategic opportunities.
              </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <motion.div
              className="bg-gray-100 p-8 text-gray-900 lg:col-span-7 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Corporate &amp; commercial counsel</p>
              <h3 className="mb-3 text-3xl font-medium tracking-tight lg:text-4xl">Companies &amp; Investors</h3>
              <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-gray-600 lg:text-lg">
                Strategic counsel for building, financing, operating, acquiring, and exiting businesses.
              </p>
              <div className="border-y border-gray-300">
                {[
                  { title: "Corporate & Venture Transactions", anchor: "corporate-venture" },
                  { title: "Commercial & Technology Transactions", anchor: "commercial-technology" }
                ].map((service) => (
                  <a
                    key={service.anchor}
                    href={`/services#${service.anchor}`}
                    className="group flex items-center justify-between gap-6 border-b border-gray-300 py-6 last:border-b-0"
                  >
                    <span className="text-xl font-medium lg:text-2xl">{service.title}</span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-black" />
                  </a>
                ))}
              </div>
              <a href="/services#corporate-venture" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                View Corporate Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="border border-white/20 bg-white/[0.06] p-8 text-white lg:col-span-5 lg:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Also serving the sports ecosystem</p>
              <h3 className="mb-3 text-3xl font-medium tracking-tight">Sports &amp; NIL</h3>
              <p className="mb-8 text-base font-light leading-relaxed text-gray-300">
                Counsel for athletes, collectives, brands, sponsors, and institutions.
              </p>
              <div className="border-y border-white/20">
                {[
                  { title: "Athletes", anchor: "nil-athlete" },
                  { title: "Collectives", anchor: "collective" },
                  { title: "Brands & Sponsors", anchor: "brand-sponsor" },
                  { title: "Universities & Institutions", anchor: "university-institutional" }
                ].map((service) => (
                  <a
                    key={service.anchor}
                    href={`/services#${service.anchor}`}
                    className="group flex items-center justify-between gap-6 border-b border-white/20 py-4 last:border-b-0"
                  >
                    <span className="text-lg font-medium">{service.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </a>
                ))}
              </div>
              <a href="/services#nil-athlete" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Explore Sports &amp; NIL Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Transaction Experience */}
      <section aria-labelledby="experience-heading" className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">Selected experience</p>
              <h2 id="experience-heading" className="text-3xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6">
                Transaction discipline for high-stakes decisions.
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-600">
                Experience across M&amp;A, venture capital, and growth equity matters for companies, funds, and institutional investors.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-gray-300">
                {[
                  { value: "$1.80B+", label: "Aggregate disclosed value" },
                  { value: "13", label: "Selected transactions" },
                  { value: "$2M–$1B", label: "Disclosed matter range" },
                ].map((item, index) => (
                  <div key={item.label} className={`py-9 ${index > 0 ? "sm:border-l sm:pl-8 border-gray-300" : ""}`}>
                    <p className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-3">{item.value}</p>
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-3">Representative matters</p>
                  <p className="text-base font-light leading-relaxed text-gray-600">
                    A $1 billion all-stock biotechnology sale, a $225 million acquisition, a $46 million Series B investment, and a $20 million AI platform financing.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-3">Representative sectors</p>
                  <p className="text-base font-light leading-relaxed text-gray-600">
                    Technology, sports, healthcare, biopharma, franchising, professional services, enterprise software, and consumer products.
                  </p>
                </div>
              </div>

              <p className="mt-10 text-xs leading-relaxed text-gray-500">
                Selected prior representations. Some matters may have been completed at prior firms. Past results do not guarantee a similar outcome.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div 
              className="lg:col-span-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                BigLaw transaction experience.
                <br />
                <span className="font-medium">Entrepreneurial perspective.</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
                Momentum Legal delivers senior, commercially grounded counsel with the responsiveness and direct attention ambitious clients expect.
              </p>
              <button 
                onClick={() => window.location.href = '/about'}
                className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-sm transition-all hover:scale-110 hover:bg-black group self-start"
              >
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
            <motion.div 
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-8 border border-gray-100 bg-white">
                <h3 className="text-base font-medium mb-3 text-gray-900">About the Founder — Wilson Hall</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600 mb-6">
                  Before founding Momentum Legal, Wilson practiced at Goodwin Procter LLP and Davis Wright Tremaine LLP. He advises companies and investors on complex corporate, financing, commercial, and strategic matters.
                </p>
                <button 
                  onClick={() => window.location.href = '/about#meet-the-founder'}
                  className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-sm transition-all hover:scale-110 hover:bg-black group"
                >
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Hidden until accurate stats are available */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "TRANSACTIONS CLOSED" },
              { number: "30+", label: "INSTITUTIONS SUPPORTED" },
              { number: "100%", label: "NIL ELIGIBILITY MAINTAINED" },
              { number: "5★", label: "CLIENT SATISFACTION" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-light mb-2 text-gray-900">{stat.number}</div>
                <div className="text-sm font-medium tracking-wide text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Let's build your
                <br />
                <span className="font-medium">Momentum</span>
              </h2>
              <p className="text-lg font-light leading-relaxed max-w-lg text-gray-300">
                Tell us about the transaction, growth decision, or commercial challenge in front of you. We typically respond within one business day.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border flex items-center justify-center border-gray-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:415-404-9232" className="font-light hover:text-gray-300 transition-colors">415-404-9232</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border flex items-center justify-center border-gray-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@momentumlegalpc.com" className="font-light hover:text-gray-300 transition-colors">info@momentumlegalpc.com</a>
                </div>
              </div>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="hidden" aria-hidden="true">
                    <label className="sr-only" htmlFor="home-website">Leave this field empty</label>
                    <input
                      id="home-website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(event) => setHoneypot(event.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="firstName"
                      value={contactForm.firstName}
                      onChange={handleContactInputChange}
                      placeholder="First Name" 
                      required
                      maxLength={60}
                      className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                    />
                    <input 
                      type="text" 
                      name="lastName"
                      value={contactForm.lastName}
                      onChange={handleContactInputChange}
                      placeholder="Last Name" 
                      required
                      maxLength={60}
                      className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                    />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactInputChange}
                    placeholder="Work Email" 
                    required
                    maxLength={190}
                    className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                  />
                  <input 
                    type="text" 
                    name="company"
                    value={contactForm.company}
                    onChange={handleContactInputChange}
                    placeholder="Company / Organization (optional)" 
                    maxLength={160}
                    className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                  />
                  <textarea 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    placeholder="Briefly describe your matter (corporate, NIL, institution)..." 
                    rows={4}
                    required
                    maxLength={2000}
                    className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors resize-none border-gray-600"
                  />
                  {errorMessage && (
                    <div className="text-sm text-red-300 bg-red-900/30 border border-red-700 rounded-lg px-4 py-3">
                      {errorMessage}
                    </div>
                  )}
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-100 disabled:opacity-50"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Request an Introductory Call'}
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium mb-2 text-white">Thank You!</h3>
                  <p className="text-gray-300 mb-6">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo-latest.png" 
                  alt="Momentum Legal" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-poppins font-semibold tracking-tight uppercase">
                    <span className="text-2xl">M</span>OMENTUM <span className="text-2xl">L</span>EGAL
                  </span>
                  <span className="text-[10px] font-poppins font-normal tracking-wide text-gray-300 uppercase">
                    a Professional Corporation
                  </span>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed max-w-md mb-4 text-gray-400">
                Corporate, NIL, and institutional counsel—delivered with clarity, speed, and precision.
              </p>
              <div className="text-sm font-light text-gray-400 mb-6">
                <p>28 Geary St., Suite 650 #193</p>
                <p>San Francisco, CA 94108</p>
                <p className="mt-2">
                  <a href="tel:415-404-9232" className="hover:text-gray-300 transition-colors">415-404-9232</a>
                </p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/momentum-legal-p-c/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/momentumlegalpc?igsh=NTdhMGdlemoydW5v&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="mailto:info@momentumlegalpc.com" className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">NAVIGATION</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <a href="/" className="block transition-colors hover:text-white">Home</a>
                <a href="/about" className="block transition-colors hover:text-white">About</a>
                <a href="/services" className="block transition-colors hover:text-white">Services</a>
                <a href="/contact" className="block transition-colors hover:text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">SERVICES</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <a href="/services#corporate-venture" className="block transition-colors hover:text-white">Corporate & Venture</a>
                <a href="/services#commercial-technology" className="block transition-colors hover:text-white">Commercial & Technology</a>
                <a href="/services#nil-athlete" className="block transition-colors hover:text-white">NIL & Athletes</a>
                <a href="/services#collective" className="block transition-colors hover:text-white">NIL Collectives</a>
                <a href="/services#brand-sponsor" className="block transition-colors hover:text-white">Brand & Sponsors</a>
                <a href="/services#university-institutional" className="block transition-colors hover:text-white">University Counsel</a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 border-gray-800">
            <p>© 2026 Momentum Legal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="transition-colors hover:text-gray-300">Privacy Policy</a>
              <a href="/terms" className="transition-colors hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
