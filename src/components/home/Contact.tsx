import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAay8M_58K8RXHCfzmM2Gdw7dEgGmwz1sw",
  authDomain: "maden-infispark.firebaseapp.com",
  projectId: "maden-infispark",
  storageBucket: "maden-infispark.appspot.com", // Corrected
  messagingSenderId: "1047210661059",
  appId: "1:1047210661059:web:4a372d286c5d0406fc3e76",
  measurementId: "G-FLCGBKNL0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Contact() {
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
    e.preventDefault(); // Prevent default form submission

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
        message: 'Message sent successfully!',
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
        message: 'Failed to send message. Please try again.',
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
    <section className="py-20 bg-[#3c605b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#f6db98] mb-16">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[#f6db98] mb-6">
              Get in Touch
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 text-[#f6db98] placeholder-[#f6db98]/50 border border-[#f6db98]/20 rounded focus:outline-none focus:border-[#f6db98]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 text-[#f6db98] placeholder-[#f6db98]/50 border border-[#f6db98]/20 rounded focus:outline-none focus:border-[#f6db98]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 text-[#f6db98] placeholder-[#f6db98]/50 border border-[#f6db98]/20 rounded focus:outline-none focus:border-[#f6db98]"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#b48c2e] text-white rounded hover:bg-[#f6db98] hover:text-[#15302d] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#f6db98] mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#f6db98] mr-4" />
                <span className="text-[#f6db98]">contact@maden.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#f6db98] mr-4" />
                <span className="text-[#f6db98]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#f6db98] mr-4" />
                <span className="text-[#f6db98]">
                  123 Luxury Avenue, Suite 100<br />New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {popup.isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <h3 className={`text-xl font-semibold mb-4 ${popup.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {popup.isSuccess ? 'Success' : 'Error'}
            </h3>
            <p className="mb-6">{popup.message}</p>
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <button
              onClick={closePopup}
              className="w-full px-4 py-2 bg-[#b48c2e] text-white rounded hover:bg-[#f6db98] hover:text-[#15302d] transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
