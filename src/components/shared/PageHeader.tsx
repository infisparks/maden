// import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-[#15302d]/70" />
      </div>
      <motion.div 
        className="relative text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#f6db98] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#f6db98]/90 text-xl md:text-2xl max-w-3xl mx-auto px-4">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}