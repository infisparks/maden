// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import Portfolio from '../components/home/Portfolio';
import FloorMap from '../components/home/FloorMap';
import Contact from '../components/home/Contact';
import Projects from '../components/Projects';
import ContactForm from '../components/Contactform';

export default function HomePage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    // Check localStorage to see if the user has already submitted the contact form
    const hasSubmitted = localStorage.getItem('contactFormSubmitted');

    if (!hasSubmitted) {
      // Show the contact form popup if not submitted
      setIsContactFormOpen(true);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Components */}
      <Hero />
      <Philosophy />
      <Projects />
      {/* Uncomment if needed */}
      {/* <Portfolio /> */}
      {/* <FloorMap /> */}
      <Contact />

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <ContactForm onClose={() => setIsContactFormOpen(false)} />
      )}
    </motion.div>
  );
}
