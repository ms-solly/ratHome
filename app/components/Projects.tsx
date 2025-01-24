"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { title: "Cheese Catcher", description: "A fun and addictive mobile game featuring adorable rats" },
  { title: "Whisker Wonders", description: "An interactive web adventure with charming rat characters" },
  { title: "Ratagram", description: "A cute and engaging social media app for rat enthusiasts" },
]

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-display mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ratty Projects
        </motion.h2>
        <div className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary rounded-lg shadow-lg overflow-hidden p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{projects[currentProject].title}</h3>
              <p className="text-sm">{projects[currentProject].description}</p>
              <motion.div
                className="w-16 h-16 bg-accent rounded-full mt-4 mx-auto"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </AnimatePresence>
          <motion.button
            onClick={prevProject}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-background p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-background p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  )
}

