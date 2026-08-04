"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Phone, Mail, Linkedin, Scale, Award, Building, Briefcase, Instagram } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
    
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.location.href = '/'
      return
    }
    if (sectionId === 'services' || sectionId === 'contact') {
      window.location.href = `/#${sectionId}`
      return
    }
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className="min-h-full overflow-x-hidden bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/Office Space (2).jpg"
            alt="Modern conference room with city skyline view"
            fill
            priority
            className="object-cover will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
              scale: 1.2,
            }}
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-screen-2xl lg:p-12 mx-auto pt-6 px-6 pb-6 w-full">
          <div className="flex items-center min-h-[60vh]">
            <motion.div 
              className="w-full max-w-4xl"
              variants={stagger}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <div className="space-y-8">
                <motion.div 
                  className="inline-flex gap-2 w-fit text-xs font-medium text-white bg-white/20 backdrop-blur-sm pt-2 pr-4 pb-2 pl-4 items-center rounded-full"
                  variants={fadeUp}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  Senior counsel · Direct attention
                </motion.div>

                <motion.h1 
                  className="lg:text-7xl leading-none text-5xl font-light text-white tracking-tight"
                  variants={fadeUp}
                >
                  BigLaw experience.
                  <br />
                  <span className="font-medium">Entrepreneurial perspective.</span>
                </motion.h1>

                <motion.p 
                  className="text-lg lg:text-xl font-light leading-relaxed max-w-3xl text-gray-200"
                  variants={fadeUp}
                >
                  Momentum Legal combines sophisticated transaction experience with practical judgment, responsiveness, and direct partner-level attention.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-8 text-gray-900">
              Built for
              <br />
              <span className="font-medium">pivotal business decisions.</span>
            </h2>
            <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-600 mb-12">
              We advise companies, investors, and participants across the technology, sports, and broader business landscape when legal decisions carry meaningful commercial consequences. Our role is to clarify the risk, protect the client’s position, and help move the underlying objective forward—with advice that is rigorous, direct, and grounded in how business actually gets done.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wilson Hall Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Wilson's Info */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div id="meet-the-founder">
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                  Meet the Founder
                  <br />
                  <span className="font-medium">Wilson Hall</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                <p>
                  Wilson Hall founded Momentum Legal after practicing at Goodwin Procter LLP and Davis Wright Tremaine LLP. His experience spans mergers and acquisitions, venture and growth financings, commercial transactions, corporate governance, and strategic matters for companies and investors.
                </p>
                
                <p>
                  His prior representations include matters ranging from early-stage financings to transactions with disclosed values of up to $1 billion. That experience informs a disciplined approach to diligence, negotiation, documentation, and closing execution.
                </p>
                
                <p>
                  As the son of an entrepreneur, Wilson also understands the practical pressure behind legal decisions: limited time, finite resources, competing stakeholders, and the need to keep momentum. Clients work directly with him throughout the engagement.
                </p>
                
                <p>
                  Wilson earned his Juris Doctor and High Tech Law Certificate with an Intellectual Property Specialization from Santa Clara University School of Law. His technology-focused training supports his work with innovative businesses, commercial arrangements, and IP-driven opportunities.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Visual & Values */}
            <motion.div 
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Founder Headshot */}
              <div className="bg-white p-8 border border-gray-100 text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <Image
                    src="/WilsonHall-20250925-043-neutral2.jpg"
                    alt="Wilson Hall, Founder of Momentum Legal"
                    width={350}
                    height={450}
                    className="w-96 h-[28rem] object-contain rounded-2xl mx-auto"
                    priority
                  />
                </motion.div>
                <h3 className="text-xl font-medium mb-2 text-gray-900">Wilson Hall</h3>
                <p className="text-sm text-gray-600 mb-4">Founder & Principal Attorney</p>
                <div className="flex items-center justify-center gap-8">
                  <a
                    href="mailto:wilson@momentumlegalpc.com"
                    className="inline-flex flex-col items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wilson-x-hall-41595bb9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-white p-8 border border-gray-100">
                <h3 className="text-lg font-medium mb-6 text-gray-900">How We Work</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Award className="h-5 w-5" />, title: "Commercial Judgment", description: "Advice calibrated to the business objective" },
                    { icon: <Building className="h-5 w-5" />, title: "Direct Access", description: "Senior attention throughout the engagement" },
                    { icon: <Briefcase className="h-5 w-5" />, title: "Execution", description: "Clear ownership, responsiveness, and follow-through" }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-black mt-1">
                        {value.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{value.title}</div>
                        <div className="text-sm text-gray-600">{value.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                Experience &
                <br />
                <span className="font-medium">Credentials</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Legal Education",
                  items: [
                    { label: "Juris Doctor", detail: "Santa Clara University School of Law, 2022" },
                    { label: "High Tech Law Certificate", detail: "IP Specialization with Honors" }
                  ]
                },
                {
                  category: "Professional Experience",
                  items: [
                    { label: "Google DeepMind", detail: "IP Counsel" },
                    { label: "Goodwin Procter LLP", detail: "Corporate associate" },
                    { label: "Davis Wright Tremaine LLP", detail: "Corporate associate" }
                  ]
                },
                {
                  category: "Bar Admissions",
                  items: [
                    { label: "California"}
                  ]
                },
                {
                  category: "Practice Focus",
                  items: [
                    { label: "Corporate & Venture Transactions", detail: "Companies, founders, funds, and investors" },
                    { label: "Commercial & Technology Transactions", detail: "Strategic and IP-driven business relationships" },
                    { label: "Sports & NIL Counsel", detail: "Athletes, collectives, brands, sponsors, and institutions" }
                  ]
                }
              ].map((section, index) => (
                <motion.div 
                  key={index}
                  className="p-6 border border-gray-100 bg-gray-50"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-base font-medium mb-4 text-gray-900">{section.category}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i}>
                        <div className="font-normal text-gray-800 text-sm">{item.label}</div>
                        {('detail' in item ? item.detail : null) && (
                          <div className="text-sm text-gray-600">{'detail' in item ? item.detail : ''}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-8">
              Ready to partner with
              <br />
              <span className="font-medium">Momentum Legal?</span>
            </h2>
            <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-gray-300 mb-12">
              Tell us about the transaction, growth decision, or strategic challenge in front of you. We typically respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Request an Introductory Call</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => window.location.href = '/services'}
                className="border px-8 py-4 text-sm font-medium transition-colors border-gray-600 hover:border-white text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.button>
            </div>
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
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-poppins font-medium tracking-[0.08em] uppercase">
                    Momentum Legal
                  </span>
                  <span className="mt-1 text-[9px] font-poppins font-normal tracking-[0.14em] text-gray-400 uppercase">
                    A Professional Corporation
                  </span>
                </div>
              </div>
              <p className="text-sm font-light leading-relaxed max-w-md mb-4 text-gray-400">
                Corporate and commercial counsel for companies and investors, with dedicated Sports &amp; NIL capabilities.
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
                <a href="/about" className="block transition-colors text-white">About</a>
                <a href="/services" className="block transition-colors hover:text-white">Services</a>
                <a href="/contact" className="block transition-colors hover:text-white">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-4 tracking-wide">SERVICES</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <a href="/services/corporate-venture" className="block transition-colors hover:text-white">Corporate & Venture</a>
                <a href="/services/commercial-technology" className="block transition-colors hover:text-white">Commercial & Technology</a>
                <a href="/services/nil-athlete" className="block transition-colors hover:text-white">NIL & Athletes</a>
                <a href="/services/collective" className="block transition-colors hover:text-white">NIL Collectives</a>
                <a href="/services/brand-sponsor" className="block transition-colors hover:text-white">Brand & Sponsors</a>
                <a href="/services/university-institutional" className="block transition-colors hover:text-white">University Counsel</a>
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
