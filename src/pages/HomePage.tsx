// src/pages/HomePage.js

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
// import Portfolio from '../components/home/Portfolio';
// import FloorMap from '../components/home/FloorMap';
import Contact from '../components/home/Contact';
import Projects from '../components/Projects';
import ContactForm from '../components/Contactform';

// --- NEW COMPONENT FOR MAINTENANCE MODE (You'll need to create this file) ---
// You would typically have a simple component like this:
/*
// src/components/Maintenance.js
const Maintenance = () => (
    <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>
        <h1>🚧 Website Under Maintenance 🚧</h1>
        <p>We're making some exciting updates. We'll be back shortly!</p>
    </div>
);
export default Maintenance;
*/
import Maintenance from '../components/Maintenance'; // Assuming you create this component
// --------------------------------------------------------------------------

export default function HomePage() {
  // --- NEW STATE VARIABLE FOR MAINTENANCE MODE ---
  // Set this to 'true' to show the maintenance page, 'false' to show the website.
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true); 
  // ---------------------------------------------

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    // Only check for contact form submission if the site is NOT in maintenance mode
    if (!isMaintenanceMode) { 
        // Check localStorage to see if the user has already submitted the contact form
        const hasSubmitted = localStorage.getItem('contactFormSubmitted');

        if (!hasSubmitted) {
            // Show the contact form popup if not submitted
            setIsContactFormOpen(true);
        }
    }
  }, [isMaintenanceMode]); // Re-run effect if maintenance mode changes

  if (isMaintenanceMode) {
    return <Maintenance />; // Renders the maintenance component directly
  }

  // Renders the full website when isMaintenanceMode is false
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