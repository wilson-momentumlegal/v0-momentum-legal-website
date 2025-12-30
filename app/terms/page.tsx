"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react"
import { Navigation } from "@/components/Navigation"
import { fadeUp, stagger } from "@/lib/motion"

export default function TermsOfServicePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-full bg-gray-50 text-gray-900 font-inter">
      <Navigation currentPage="terms" />

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
              Terms of
              <br />
              <span className="font-medium">Service</span>
            </motion.h1>

            <motion.p 
              className="text-lg lg:text-xl font-light leading-relaxed text-gray-300"
              variants={fadeUp}
            >
              These Terms of Service govern your access to and use of our website. By accessing or using the Site, you agree to be bound by these Terms.
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
                These Terms of Service ("Terms") govern your access to and use of the website operated by Momentum Legal, P.C. ("Momentum Legal," "we," "us," or "our") located at www.momentumlegalpc.com (the "Site"). By accessing or using the Site, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 font-medium">
                If you do not agree to these Terms, you should not use the Site.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Informational Purposes Only; No Legal Advice</h2>
                <p className="text-gray-600 leading-relaxed">
                  The content on this Site is provided for general informational purposes only and does not constitute legal advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">2. No Attorney-Client Relationship</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your use of the Site does not create an attorney-client relationship. An attorney-client relationship is established only through a written engagement letter signed by both you and Momentum Legal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">3. No Confidential Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  Do not send confidential or sensitive information through the Site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Intellectual Property Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on the Site is owned by Momentum Legal or its licensors and protected by intellectual property laws. Content may be used only for personal, non-commercial purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Permitted Use</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to use the Site only for lawful purposes and not to interfere with its operation, attempt unauthorized access, or use automated tools without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Momentum Legal is not responsible for third-party websites linked on the Site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Site and Content are provided "as is" without warranties of any kind.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Momentum Legal is not liable for damages arising from your use of the Site to the fullest extent permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your use of the Site is subject to our <a href="/privacy" className="text-gray-900 hover:text-gray-700 underline">Privacy Policy</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">10. Governing Law and Venue</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of the State of California, and disputes shall be brought in courts located in San Francisco, California.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">11. Changes to These Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update these Terms from time to time. Updates will be posted with a revised "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">12. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-900 font-medium mb-2">Momentum Legal, P.C.</p>
                  <p className="text-gray-600 mb-1">28 Geary St. STE 650 #193</p>
                  <p className="text-gray-600 mb-1">San Francisco, CA 94108</p>
                  <p className="text-gray-600">
                    Email: <a href="mailto:info@momentumlegalpc.com" className="text-gray-900 hover:text-gray-700 underline">info@momentumlegalpc.com</a>
                  </p>
                </div>
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
                <a href="/privacy" className="block transition-colors hover:text-white">Privacy Policy</a>
                <a href="/terms" className="block transition-colors text-white">Terms of Service</a>
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

