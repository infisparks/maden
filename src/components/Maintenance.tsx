import React from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiMail } from 'react-icons/fi'; // Removed FiClock as it's not needed

// You'll need to install react-icons if you haven't already:
// npm install react-icons

const Maintenance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa', // Light background
        color: '#343a40', // Dark text
        fontFamily: 'Inter, sans-serif', // Modern sans-serif font
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <FiTool size={80} color="#007bff" /> {/* Blue accent icon */}
      </motion.div>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          fontSize: '3.5em',
          fontWeight: 700,
          margin: '20px 0 10px 0',
          color: '#007bff', // Blue heading
        }}
      >
        Maden Multicorp LLP
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          fontSize: '1.4em',
          maxWidth: '600px',
          lineHeight: 1.6,
          marginBottom: '30px',
        }}
      >
        We're currently performing some **essential updates and improvements** to bring you a better experience. We appreciate your patience and will be back shortly!
      </motion.p>

      {/* --- Removed the estimated downtime section entirely --- */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }} // Adjusted delay
      >
        <p style={{ fontSize: '1.1em', marginBottom: '10px' }}>
          Need immediate assistance?
        </p>
        <a
          href="mailto:madenmulticorp@gmail.com" // Updated email address
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#28a745', // Green button
            color: 'white',
            padding: '12px 25px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'background-color 0.3s ease',
          }}
          // The hover logic for the button remains the same
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#218838';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#28a745';
          }}
        >
          <FiMail size={20} />
          Email Us
        </a>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100px' }}
        transition={{ delay: 1.0, duration: 1.0, ease: 'easeInOut' }} // Adjusted delay
        style={{
          height: '4px',
          backgroundColor: '#007bff',
          borderRadius: '2px',
          marginTop: '40px',
        }}
      />
    </motion.div>
  );
};

export default Maintenance;