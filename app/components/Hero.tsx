"use client"
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="mt-12 ml-6 md:ml-12 max-w-2xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
      <div className="md:mr-12">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-teal-400 to-pink-500 text-transparent bg-clip-text leading-tight">
          Welcome to RatHome
        </h1>
        <p className="text-lg text-gray-400 mt-6 leading-relaxed max-w-md">
          Discover a unique and cozy digital experience that combines creativity and cuteness in the most engaging way.
        </p>
      </div>

      <motion.img
        src="/chuhiya.png"
        alt="Cute Rat"
        className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-12 ml-3 md:mt-0 md:absolute md:bottom-12 md:right-12 opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  )
}
