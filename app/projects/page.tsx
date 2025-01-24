"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section id="projects" >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-pink-500 text-transparent bg-clip-text">
            My Projects
          </h1>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8 text-gray-400 leading-relaxed">
          <p className="text-lg">
            Welcome to my projects page! I enjoy exploring different aspects of technology, from web development to creative design.
            This page is a work in progress, and I'll be adding more details about the things I've been learning and working on.
          </p>

          <p className="text-lg">
            The website you're currently viewing, <span className="text-white font-semibold">RatHome</span>, is still under development.
            Stay tuned as I update this section with insights into my personal projects and experiences.
          </p>

          <p className="text-lg">
            Thank you for your patience! Feel free to check back soon, and in the meantime, you can explore my{" "}
            <Link href="/blog" className="text-teal-400 hover:text-pink-400 transition-colors duration-300 ">
              blog
            </Link>{" "}
            where I share thoughts and updates on my journey.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
