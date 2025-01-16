// src/components/home/ContactForm.js

import React, { useState } from 'react';
import { database } from './../firebase';
import { ref, push } from 'firebase/database';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  /**
   * Function to send WhatsApp message by submitting a hidden form
   */
  const sendWhatsAppMessage = (data) => {
    const phoneNumber = data.phone.replace(/\D/g, ''); // Remove non-digit characters
    const fullNumber = `919958399157`;
    const message = `New Contact Form Submission:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    
    const apiUrl = 'https://adrika.aknexus.in/api/send';

    // Parameters for the GET request
    const params = {
      number: fullNumber,
      type: 'text', // Assuming 'text' type; change to 'media' if sending media
      message: message,
      // If sending media, uncomment the following lines and provide media_url and filename
      // media_url: 'https://example.com/path-to-media.jpg',
      // filename: 'media.jpg',
      instance_id: '67278A2693C73',
      access_token: '67277e6184833'
    };

    // Create a hidden iframe if it doesn't exist
    let iframe = document.getElementById('hidden_iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.id = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Create the form
    const form = document.createElement('form');
    form.method = 'GET';
    form.action = apiUrl;
    form.target = 'hidden_iframe';

    // Append hidden inputs to the form
    Object.entries(params).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();

    // Clean up by removing the form after submission
    document.body.removeChild(form);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, {
        ...formData,
        timestamp: Date.now(),
      });

      // Send WhatsApp message after successful Firebase submission
      sendWhatsAppMessage(formData);

      // Set a flag in localStorage to prevent future popups
      localStorage.setItem('contactFormSubmitted', 'true');

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error writing to Firebase:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      {/* Hidden Iframe for WhatsApp API submission */}
      <iframe id="hidden_iframe" name="hidden_iframe" style={{ display: 'none' }}></iframe>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            aria-label="Close Contact Form"
          >
            &times;
          </button>

          {/* Form Title */}
          <h2 className="text-2xl font-semibold mb-4 text-[#15302d]">
            Contact Us
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                rows={4}
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#15302d] text-white rounded-md hover:bg-[#1b3a37]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
