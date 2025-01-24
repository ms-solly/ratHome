"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import {  FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; 
import { RiTwitterXFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-teal-300 to-pink-400 text-transparent bg-clip-text">
              RatHome
            </h3>
            <p className="mt-2 text-lg text-gray-400">
              Akrati B's Professional Portfolio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          >
            <Link href="/about" className="text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300">About</Link>
            <Link href="/services" className="text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300">Services</Link>
            <Link href="/contact" className="text-lg text-gray-300 hover:text-teal-300 transition-colors duration-300">Contact</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <Link href="https://x.com/InkandInspire" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-400 transition-colors duration-300">
             <RiTwitterXFill/>
            </Link>
            <Link href="https://www.instagram.com/designdevloop/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <FaInstagram />
            </Link>
            <Link href="https://github.com/Akrati00/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/akrati-bhadauria/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <FaLinkedin />
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4">
          <p className="text-gray-400 text-sm flex items-center">
            Crafted with 
            <span className="text-pink-400 text-lg mx-1">
            {' '}
            <motion.svg
              className="mx-1 w-6 h-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              initial={{ scale: 1 }}
              animate={{
                scale: 1, 
                rotate: 0, 
              }}
              transition={{
                duration: 0,
                repeat: 0,
              }}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              <motion.path
                d="M12 13c-1.5 0-2.5-1.5-2.5-3s1-3 2.5-3c1.5 0 2.5 1.5 2.5 3s-1 3-2.5 3z"
                fill="currentColor"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>
            </span>
          </p>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} RatHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
