"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted')
    if (!hasAccepted) {
      // Show banner after a brief delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1 pr-4">
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                  We use cookies to improve your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.{' '}
                  <a
                    href="/privacy"
                    className="text-cyan-800 hover:text-cyan-600 underline font-medium transition-colors"
                  >
                    Learn more
                  </a>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  onClick={acceptCookies}
                  className="flex-1 sm:flex-none bg-cyan-800 hover:bg-cyan-700 text-white px-6 py-2.5 text-sm font-semibold shadow-lg transition-all duration-200"
                >
                  Accept
                </Button>
                <button
                  onClick={acceptCookies}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  aria-label="Close banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
