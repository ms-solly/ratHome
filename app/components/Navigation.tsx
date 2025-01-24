"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "About", icon: User, path: "/about" },
  { name: "Projects", icon: Briefcase, path: "/projects" },
  { name: "Contact", icon: Mail, path: "/contact" },
]

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("Home")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="md:hidden absolute top-4 right-4 z-50">
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-8 h-1 bg-white mb-2 rounded-md transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white mb-2 rounded-md transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white mb-2 rounded-md transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800 shadow-2xl px-8 py-4 ${
          isOpen ? "block" : "hidden"
        } md:block`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ul className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-10 text-center">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                activeItem === item.name ? "bg-gradient-to-tl from-teal-700 to-pink-700 text-white shadow-lg" : "text-gray-400 hover:text-white"
              } rounded-full px-6 py-3 flex items-center gap-3 justify-center`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveItem(item.name); setIsOpen(false); }}
            >
              <Link href={item.path} className="flex items-center">
                <item.icon size={28} className="mx-1" />
                <span className="hidden md:inline font-semibold text-lg">{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  )
}
