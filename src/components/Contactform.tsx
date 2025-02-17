// src/components/home/ContactForm.tsx

import React, { useState } from 'react';
import { database } from './../firebase';
import { ref, push } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the props for the ContactForm component
interface ContactFormProps {
  onClose: () => void;
}

// Define the structure of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      // 1. Save to Firebase
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, {
        ...formData,
        timestamp: Date.now(),
      });

      // 2. Send WhatsApp message with full contact data
      await sendWhatsAppMessage(formData);

      // 3. Optional: Set localStorage flag to prevent future popups
      localStorage.setItem('contactFormSubmitted', 'true');

      // 4. Show success message
      setSuccess('Your message has been sent successfully!');

      // 5. Auto-close the form after a delay (optional)
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Error submitting the form:', err);
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Sends a WhatsApp message with full contact form data using the new API.
   * @param data The full contact form data.
   */
  const sendWhatsAppMessage = async (data: FormData) => {
    // Validate phone number (basic validation)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(data.phone)) {
      console.error('Invalid phone number format.');
      setError('Please enter a valid phone number.');
      return;
    }

    // Prepend country code (91 for India). Adjust if necessary.
    const fullNumber = `91${data.phone}`;

    // WhatsApp API endpoint (POST request)
    const apiUrl = 'https://wa.medblisss.com/send-text';

    // Define the token (your provided token)
    const token = '9958399157'; // Ensure this is securely managed

    // Define the recipient's number (e.g., your company's WhatsApp number)
    const recipientNumber = '917869786492'; // Replace with your actual recipient number

    // Construct the message with all form data
    const message = `
New Contact Form Submission:
Name: ${data.name}
Email: ${data.email}
Phone: ${fullNumber}
Message: ${data.message}
    `.trim();

    // Define the request payload
    const payload = {
      token: token,           // Your provided token
      number: recipientNumber, // Recipient's number
      message: message,         // The message to send
    };

    try {
      // Make the POST request using fetch
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `WhatsApp API responded with status ${response.status}`);
      }

      // Optionally, handle the response data
      const responseData = await response.json();
      console.log('WhatsApp message sent successfully:', responseData);
      toast.success('Your message has been sent successfully!');
    } catch (error: any) {
      console.error('Error sending WhatsApp message:', error);
      setError('Failed to send WhatsApp message. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <ToastContainer />

      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close Contact Form"
        >
          &times;
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold mb-4 text-[#15302d] text-center">
          Contact Us
        </h2>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] px-3 py-2"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10,15}"
              title="Please enter a valid phone number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] px-3 py-2"
              placeholder="9876543210"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] px-3 py-2"
              rows={4}
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 bg-[#15302d] text-white rounded-md hover:bg-[#1b3a37] transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
