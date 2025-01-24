"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-display mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Say Cheese!
        </motion.h2>
        <motion.div
          className="max-w-md mx-auto bg-secondary p-8 rounded-lg shadow-lg"
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
        </motion.div>
      </div>
    </section>
  )
}

