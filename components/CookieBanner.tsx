"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem('cookieNoticeSeen') || localStorage.getItem('cookiesAccepted')
    if (!hasSeenNotice) {
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismissNotice = () => {
    localStorage.setItem('cookieNoticeSeen', 'true')
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
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-5"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl px-4 py-3 sm:px-5 flex items-center justify-between gap-3 sm:gap-5">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  This site uses cookies and site analytics to understand traffic and improve the experience.{' '}
                  <a
                    href="/privacy"
                    className="text-gray-900 hover:text-gray-600 underline underline-offset-2 font-medium transition-colors"
                  >
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <button
                  onClick={dismissNotice}
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 text-xs sm:text-sm font-medium transition-colors"
                >
                  Got it
                </button>
                <button
                  onClick={dismissNotice}
                  className="text-gray-400 hover:text-gray-900 transition-colors p-2"
                  aria-label="Dismiss cookie notice"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
