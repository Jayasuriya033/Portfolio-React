"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 border-t border-gray-800">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between">
          <motion.div
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-primary">Jayasuriya</span>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>

          <motion.p
            className="text-sm text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Jayasuriya. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

