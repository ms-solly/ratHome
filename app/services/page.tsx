"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


export default function Services() {


    return (
        <section id="contact" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
        
    <div className="container mx-auto max-w-4xl text-center">
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-pink-500 text-transparent bg-clip-text"
    >
      Services
    </motion.h2>

    <motion.p
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed mt-6"
    >
      I’m always open to discussing new opportunities, collaborations. Reach out through <Link href="/contact" className="text-teal-400 hover:text-pink-500">Contacts</Link>!
    </motion.p>

  </div>
</section>
  )
}

