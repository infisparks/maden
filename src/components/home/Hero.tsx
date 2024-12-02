import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#15302d]/90 to-[#15302d]/70" />
      </motion.div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-[#f6db98] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             A Legacy of Excellence, 
              <span className="block">A Vision for the Future</span>
            </motion.h1>
            <motion.p 
              className="text-[#f6db98]/90 text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            Luxury construction, innovative design, 30+ years of excellence, Maden Multicorp.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#b48c2e] text-white rounded-lg hover:bg-[#f6db98] hover:text-[#15302d] transition-colors duration-200"
              >
                Explore Our Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-[#f6db98] rounded-full p-1">
          <div className="w-1 h-2 bg-[#f6db98] rounded-full animate-bounce mx-auto" />
        </div>
      </motion.div>
    </div>
  );
}