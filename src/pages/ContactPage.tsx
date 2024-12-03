import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAay8M_58K8RXHCfzmM2Gdw7dEgGmwz1sw",
  authDomain: "maden-infispark.firebaseapp.com",
  projectId: "maden-infispark",
  storageBucket: "maden-infispark.appspot.com", // Corrected storageBucket
  messagingSenderId: "1047210661059",
  appId: "1:1047210661059:web:4a372d286c5d0406fc3e76",
  measurementId: "G-FLCGBKNL0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function ContactPage() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage popup visibility and message
  const [popup, setPopup] = useState({
    isVisible: false,
    message: '',
    isSuccess: false
  });
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Reference to 'contacts' node in Realtime Database
      const contactsRef = ref(database, 'contacts');

      // Push new contact data
      await push(contactsRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: Date.now()
      });

      // Show success popup
      setPopup({
        isVisible: true,
        message: 'Your message has been sent successfully!',
        isSuccess: true
      });

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error writing to Firebase:", error);
      // Show error popup
      setPopup({
        isVisible: true,
        message: 'Failed to send your message. Please try again later.',
        isSuccess: false
      });
    }
  };

  // Handle popup close
  const closePopup = () => {
    setPopup({
      isVisible: false,
      message: '',
      isSuccess: false
    });
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss your next project"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#15302d] mb-6">Get in Touch</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#b48c2e] text-white rounded-lg hover:bg-[#15302d] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#15302d] mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#b48c2e] mr-4" />
                <span>contact@maden.com</span>
              </div>
              
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#b48c2e] mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              
              {/* Address */}
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#b48c2e] mr-4" />
                <span>
                  123 Luxury Avenue, Suite 100<br />New York, NY 10001
                </span>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#15302d] mb-4">Office Hours</h3>
              <div className="space-y-2">
                <p>Sunday- Saturday: 9:00 AM - 6:00 PM</p>
                <p>Friday By appointment only</p>
                {/* <p>Sunday: Closed</p> */}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Popup Modal */}
      {popup.isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            {/* Popup Header */}
            <h3 className={`text-xl font-semibold mb-4 ${popup.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {popup.isSuccess ? 'Success' : 'Error'}
            </h3>
            {/* Popup Message */}
            <p className="mb-6">{popup.message}</p>
            {/* Close Button (X) */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close Popup"
            >
              &times;
            </button>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="w-full px-4 py-2 bg-[#b48c2e] text-white rounded hover:bg-[#f6db98] hover:text-[#15302d] transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
