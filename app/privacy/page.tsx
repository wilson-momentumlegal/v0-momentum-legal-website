"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"

export default function PrivacyPolicyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-full bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="privacy" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-black text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl"
            variants={stagger}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
          >
            <motion.div 
              className="inline-flex gap-2 w-fit text-xs font-medium text-white bg-white/20 backdrop-blur-sm pt-2 pr-4 pb-2 pl-4 items-center rounded-full mb-6"
              variants={fadeUp}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              Legal Information
            </motion.div>

            <motion.h1 
              className="lg:text-7xl leading-none text-5xl font-light text-white tracking-tight mb-6"
              variants={fadeUp}
            >
              Privacy
              <br />
              <span className="font-medium">Policy</span>
            </motion.h1>

            <motion.p 
              className="text-lg lg:text-xl font-light leading-relaxed text-gray-300"
              variants={fadeUp}
            >
              Momentum Legal P.C. ("Momentum Legal," "we," "us," or "our") is committed to protecting your privacy and handling personal information in a transparent and lawful manner.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Last Updated: December 29, 2025</p>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website at www.momentumlegalpc.com (the "Site") or otherwise interact with us online.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                This Policy is intended to comply with applicable privacy laws, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA).
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Scope of This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  This Policy applies to personal information collected through the Site and related online interactions. It does not apply to information exchanged in the context of an attorney-client relationship.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">A. Information You Provide Voluntarily</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may collect personal information you choose to provide, including name, email address, phone number, company or organization, professional title, and information submitted through contact forms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">B. Information Collected Automatically</h3>
                    <p className="text-gray-600 leading-relaxed">
                      When you visit the Site, we may automatically collect IP address, browser type, device information, operating system, pages visited, referring URLs, and date and time of access.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">3. How We Use Personal Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use personal information to respond to inquiries, operate and improve the Site, analyze usage trends, comply with legal obligations, and protect system security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Legal Bases for Processing (GDPR)</h2>
                <p className="text-gray-600 leading-relaxed">
                  Processing is based on consent, legitimate interests, legal obligations, or contractual necessity.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Disclosure of Personal Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may disclose information to service providers, professional advisors, or government authorities as required by law. We do not sell or share personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Site uses cookies and similar technologies. You may control cookies through browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain personal information only as long as reasonably necessary.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement reasonable safeguards but cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  EEA/UK residents and California residents have rights to access, correct, delete, and restrict processing of personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">10. International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Information may be transferred to and processed in the United States with appropriate safeguards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">11. How to Exercise Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-900 font-medium mb-2">Momentum Legal P.C.</p>
                  <p className="text-gray-600 mb-1">Attn: Privacy Officer</p>
                  <p className="text-gray-600 mb-1">
                    Email: <a href="mailto:info@momentumlegalpc.com" className="text-gray-900 hover:text-gray-700 underline">info@momentumlegalpc.com</a>
                  </p>
                  <p className="text-gray-600">
                    Address: 28 Geary St., Suite 650 #193, San Francisco, CA 94108
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">12. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Site is not intended for children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">13. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Updates will be posted with a revised "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">14. No Attorney-Client Relationship</h2>
                <p className="text-gray-600 leading-relaxed">
                  Use of the Site does not create an attorney-client relationship.
                </p>
              </div>
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
              <h4 className="text-sm font-medium mb-4 tracking-wide">LEGAL</h4>
              <div className="space-y-3 text-sm font-light text-gray-400">
                <a href="/privacy" className="block transition-colors text-white">Privacy Policy</a>
                <a href="/terms" className="block transition-colors hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 border-gray-800">
            <p>© 2025 Momentum Legal. All rights reserved.</p>
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


