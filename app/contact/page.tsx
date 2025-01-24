"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


export default function Contact() {
  // const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log(formState)
  // }

  return (
<section id="contact" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
{/* <div className="container mx-auto px-4"> */}
        {/* <motion.h2
          className="text-4xl md:text-5xl font-display mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Say Cheese!
        </motion.h2> */}
        {/* <motion.div
          className="w-full mx-auto  p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3 py-2 bg-background text-text border-2 border-primary rounded-md focus:outline-none focus:border-accent transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3 py-2 bg-background text-text border-2 border-primary rounded-md focus:outline-none focus:border-accent transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.05 }}
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3 py-2 bg-background text-text border-2 border-primary rounded-md focus:outline-none focus:border-accent transition-colors duration-300"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-accent text-background font-semibold py-2 px-4 rounded-md hover:bg-accent/80 transition-colors duration-300"
            >
              Send Squeaks
            </motion.button>
          </form>
        </motion.div> */}
      {/* </div> */}

      <div className="container mx-auto max-w-4xl text-center">
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-pink-500 text-transparent bg-clip-text"
    >
      Get in Touch
    </motion.h2>

    <motion.p
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed mt-6"
    >
      I’m always open to discussing new opportunities, collaborations, or just a friendly chat. Reach out through any of the platforms below!
    </motion.p>

    <div className="flex flex-wrap justify-center gap-8 mt-12">
      <Link href="https://github.com/Akrati00/" target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center text-2xl text-gray-400 hover:text-teal-400"
        >
          <FaGithub className="mr-2" /> GitHub
        </motion.div>
      </Link>
      <Link href="https://www.linkedin.com/in/akrati-bhadauria/" target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center text-2xl text-gray-400 hover:text-teal-400"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </motion.div>
      </Link>
      <Link href="https://x.com/InkandInspire" target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center text-2xl text-gray-400 hover:text-teal-400"
        >
          <RiTwitterXFill className="mr-2" /> Twitter
        </motion.div>
      </Link>
      <Link href="https://www.instagram.com/designdevloop/" target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center text-2xl text-gray-400 hover:text-teal-400"
        >
          <FaInstagram className="mr-2" /> Instagram
        </motion.div>
      </Link>
    </div>

    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-white">Email Me</h3>
      <p className="text-lg text-gray-400 mt-4">
        Drop me a message at: <Link href="mailto:akrati0305@gmail.com" className="text-teal-400 hover:text-pink-500">akrati0305@gmail.com</Link>
      </p>
    </div>
  </div>
</section>
  )
}

