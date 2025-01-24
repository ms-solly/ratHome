"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" my-2 text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-pink-500 text-transparent bg-clip-text">
            About
          </h1>
        </motion.div>
        
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 shadow-xl">
          <p className="text-lg text-gray-300 mb-6">
            Hi, I’m Akriti Bhadauria – a web developer and designer who’s passionate about learning and exploring the world of design and technology. My journey is all about experimenting, figuring things out, and growing along the way. I love working on UI/UX design, where I can play with colors and layouts to create functional, aesthetically pleasing interfaces. Design tools like Figma and Spline are my go-to for bringing my ideas to life, whether it's for websites or just creative projects that give me space to explore.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I’m currently diving deeper into web development, particularly with Next.js, which I’m using to build responsive websites. Tailwind CSS is my styling framework of choice, as it helps me quickly create clean and organized designs. While I do use AI tools to speed up certain tasks and help me along the way, I still prefer to do things on my own whenever possible because I believe in learning through doing.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Alongside my web work, I’m also exploring Blender to create game assets and learning how games are made. It’s a new area for me, but I’m excited to dive deeper into it and see where it leads. I’m always looking for ways to combine my design skills with new technical knowledge, and I’m enjoying the process of figuring things out step by step.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I’ve contributed to open-source projects like Hacktoberfest, which has been a great way to learn from others and get involved in the community. I’ve also had the opportunity to edit a book written by Abhinav Patel, focusing on social issues and raising awareness about justice, which is something I’m passionate about.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            In my free time, I enjoy singing, writing stories, and doodling, though I don’t always find time to draw as much as I’d like. I love using these creative outlets to unwind and express myself.
          </p>
          <p className="text-lg text-gray-300">
            I’m always excited to learn new things and collaborate with others. If you’re interested in connecting or sharing ideas, feel free to reach out {" "}
            via <Link href="/blog" className="text-teal-400 hover:text-pink-400 transition-colors duration-300 ">
              Contacts 
            </Link>{" "}!
          </p>
        </div>
      </motion.div>
    </div>
  )
}
