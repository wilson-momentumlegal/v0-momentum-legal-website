"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Linkedin, MapPin, Instagram } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"
import emailjs from '@emailjs/browser'

export default function MomentumLegalV2() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Initialize EmailJS once when component mounts
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'lY4OXrWJ8jAMPSy5s')
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
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_o8wxp3v',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_8uswdqp',
        {
          from_name: `${contactForm.firstName} ${contactForm.lastName}`,
          from_email: contactForm.email,
          company: contactForm.company || 'Not provided',
          message: contactForm.message || 'No message provided',
          to_email: 'info@momentumlegalpc.com'
        }
      )

      console.log('Email sent successfully:', result)
      setIsSubmitted(true)
      setContactForm({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-full bg-gray-50 text-gray-900 font-inter">
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
                  Speed & Precision
                </motion.div>

                <div className="space-y-6">
                  <motion.h1 
                    className="lg:text-7xl leading-none text-5xl font-light text-white tracking-tight"
                    variants={fadeUp}
                  >
                    Momentum<br />
                    <span className="font-medium">Legal</span><br />
                    <span className="text-gray-200">The Power Behind Your Next Deal</span>
                  </motion.h1>

                  <motion.p 
                    className="text-lg lg:text-xl font-light leading-relaxed max-w-lg text-gray-200"
                    variants={fadeUp}
                  >
                    Corporate, Sports, and Institutional Counsel built for innovation, ambitious clients, and dynamic markets.
                  </motion.p>

                  <motion.p 
                    className="text-sm lg:text-base font-light leading-relaxed max-w-lg text-gray-300"
                    variants={fadeUp}
                  >
                    We serve as trusted advisors to founders, investors, athletes, brands, collectives, and universities to structure deals, protect IP, and navigate evolving regulations with practical, outcome‑focused advice.
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
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    className="border px-8 py-4 text-sm font-medium transition-colors border-white/50 hover:border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Services
                  </motion.button>
                </motion.div>


              </div>
            </motion.div>

          </div>  
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black pt-24 pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Section Header */}
            <motion.div 
              className="lg:col-span-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-white">
                Our
                <br />
                <span className="font-medium">Services</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-300">
              Practical, business‑first counsel across corporate, name, image, and likeness (NIL), and institutional needs—so you can move decisively and maximize opportunities.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* First Row - 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Corporate & Venture Transactions",
                      gradient: "bg-gradient-to-tr from-slate-800 to-slate-600",
                      ring: "ring-slate-400/30",
                      anchor: "corporate-venture"
                    },
                    {
                      title: "NIL & Athlete Representation",
                      gradient: "bg-gradient-to-tr from-slate-700 to-slate-500",
                      ring: "ring-slate-400/30",
                      anchor: "nil-athlete"
                    }
                  ].map((service, index) => (
                    <motion.a 
                      key={index}
                      href={`/services#${service.anchor}`}
                      className={`group relative overflow-hidden ring-1 ${service.ring} text-white ${service.gradient} rounded-2xl p-5 transition-all duration-300 cursor-pointer hover:shadow-xl block`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: "radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(0,0,0,0.25), transparent 60%)"
                        }}
                      />
                      <div className="relative flex flex-col h-full justify-between">
                        <h3 className="text-2xl font-semibold mb-6 text-white leading-tight">{service.title}</h3>
                        <div className="flex justify-end">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Second Row - 2 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "NIL Collective Representation",
                      gradient: "bg-gradient-to-tr from-gray-800 to-gray-600",
                      ring: "ring-gray-400/30",
                      anchor: "collective"
                    },
                    {
                      title: "Brand & Sponsor Advisory",
                      gradient: "bg-gradient-to-tr from-zinc-800 to-zinc-600",
                      ring: "ring-zinc-400/30",
                      anchor: "brand-sponsor"
                    }
                  ].map((service, index) => (
                    <motion.a 
                      key={index}
                      href={`/services#${service.anchor}`}
                      className={`group relative overflow-hidden ring-1 ${service.ring} text-white ${service.gradient} rounded-2xl p-5 transition-all duration-300 cursor-pointer hover:shadow-xl block`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: "radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(0,0,0,0.25), transparent 60%)"
                        }}
                      />
                      <div className="relative flex flex-col h-full justify-between">
                        <h3 className="text-2xl font-semibold mb-6 text-white leading-tight">{service.title}</h3>
                        <div className="flex justify-end">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Third Row - Centered University card */}
                <div className="flex justify-center">
                  <motion.a 
                    href="/services#university-institutional"
                    className="group relative overflow-hidden ring-1 ring-neutral-400/30 text-white bg-gradient-to-tr from-neutral-800 to-neutral-600 rounded-2xl p-5 transition-all duration-300 cursor-pointer hover:shadow-xl block w-full max-w-sm"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: "radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(0,0,0,0.25), transparent 60%)"
                      }}
                    />
                    <div className="relative flex flex-col h-full justify-between">
                      <h3 className="text-2xl font-semibold mb-6 text-white leading-tight">University & Institutional Counsel</h3>
                      <div className="flex justify-end">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
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
                About
                <br />
                <span className="font-medium">Momentum Legal</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
              We deliver modern business counsel to founders, athletes, brands, collectives, and institutions—forward vision, steady guidance, and sustainable growth.
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
                  Wilson advises across corporate transactions, NIL matters, and institutional policy, blending practical deal‑making with thoughtful compliance and risk management.
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
                Ready to drive your vision forward? Connect with us today.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="firstName"
                      value={contactForm.firstName}
                      onChange={handleContactInputChange}
                      placeholder="First Name" 
                      required
                      className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                    />
                    <input 
                      type="text" 
                      name="lastName"
                      value={contactForm.lastName}
                      onChange={handleContactInputChange}
                      placeholder="Last Name" 
                      required
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
                    className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                  />
                  <input 
                    type="text" 
                    name="company"
                    value={contactForm.company}
                    onChange={handleContactInputChange}
                    placeholder="Company / Organization (optional)" 
                    className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600"
                  />
                  <textarea 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    placeholder="Briefly describe your matter (corporate, NIL, institution)..." 
                    rows={4}
                    required
                    className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors resize-none border-gray-600"
                  />
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-100 disabled:opacity-50"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
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
                <a href="/services#nil-athlete" className="block transition-colors hover:text-white">NIL & Athletes</a>
                <a href="/services#collective" className="block transition-colors hover:text-white">NIL Collectives</a>
                <a href="/services#brand-sponsor" className="block transition-colors hover:text-white">Brand & Sponsors</a>
                <a href="/services#university-institutional" className="block transition-colors hover:text-white">University Counsel</a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 border-gray-800">
            <p>© 2025 Momentum Legal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}