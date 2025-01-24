"use client"

import { motion } from "framer-motion"

const skillsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const skills = ["Web Development", "UI/UX Design", "Animation", "Creative Coding"]

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-display mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About ratHome
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg">
              Welcome to ratHome, where we turn the ordinary into the extraordinary! Our cozy corner of the web is all
              about creating delightful digital experiences that make you go "aww" while showcasing top-notch
              development skills.
            </p>
            <p className="text-lg">
              Just like a clever little rat, we scurry through the maze of web development, finding innovative solutions
              and crafting adorable designs that will make your heart melt and your projects shine.
            </p>
          </motion.div>
          <motion.div
            variants={skillsVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={skillVariants} className="bg-secondary p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{skill}</h3>
                <motion.div
                  className="w-full bg-primary rounded-full h-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

