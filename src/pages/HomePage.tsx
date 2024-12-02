import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import Portfolio from '../components/home/Portfolio';
import FloorMap from '../components/home/FloorMap';
import Contact from '../components/home/Contact';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Philosophy />
      <Portfolio />
      <FloorMap />
      <Contact />
    </motion.div>
  );
}