  "use client"

import { motion } from "framer-motion"

export function Footer() {

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent)]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              Jayasuriya G
            </span>
          </motion.div>

                <motion.p
            className="text-sm text-gray-400 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            © {new Date().getFullYear()} Jayasuriya. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}