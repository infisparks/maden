// FloorMap.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

import second from './../../icon/2.jpg';
import third from './../../icon/1.jpg';
import first from './../../icon/3.jpg';
import fouth from './../../icon/4.jpg';
import fifth from './../../icon/5.jpeg';
import e1 from './../../icon/nm1.jpeg';
import e2 from './../../icon/nm2.jpeg';
import kg from './../../icon/kaj.png';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAay8M_58K8RXHCfzmM2Gdw7dEgGmwz1sw",
  authDomain: "maden-infispark.firebaseapp.com",
  projectId: "maden-infispark",
  storageBucket: "maden-infispark.appspot.com",
  messagingSenderId: "1047210661059",
  appId: "1:1047210661059:web:4a372d286c5d0406fc3e76",
  measurementId: "G-FLCGBKNL0V"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const floorPlans = [
  {
    id: 'floor-1',
    name: 'Elevation of Building',
    images: [
      { src: e2, details: 'Elevation image 1 ' },
      { src: e1, details: 'Elevation image 2' }
    ],
  },
  {
    id: 'floor-2',
    name: 'Amenities',
    images: [
      { src: kg, details: '⁠Kajaria CP Fittings' },
      { src: third, details: 'Modular kitchens' },
      { src: first, details: '⁠Highly Trained Security' },
      { src: second, details: 'Sofa-cum-bed' },
      { src: fouth, details: 'Double Height Luxury Lobby' },
    ],
  },
  {
    id: 'floor-3',
    name: 'Price Detail',
    details:
      'Comprehensive pricing details based on elevation and unit specifications.',
    priceDetails: [
      {
        unit: '1BHK',
        area: 644,
        rate: 5200,
        total: 3348800,
        stampDuty: 234416,
        registration: 30000,
        gst: 33488,
        totalAmount: 3646704,
      },
      {
        unit: 'STUDIO 1',
        area: 398,
        rate: 5200,
        total: 2069600,
        stampDuty: 144872,
        registration: 20696,
        gst: 20696,
        totalAmount: 2255864,
      },
      {
        unit: 'STUDIO 2',
        area: 420,
        rate: 5200,
        total: 2184000,
        stampDuty: 152880,
        registration: 21840,
        gst: 21840,
        totalAmount: 2380560,
      },
    ],
  },
];

const FloorMap = () => {
  const [selectedFloor, setSelectedFloor] = useState(floorPlans[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleNextImage = () => {
    if (selectedFloor.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedFloor.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedFloor.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedFloor.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Save data to Firebase
    try {
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, {
        name: formData.name,
        email: formData.email || 'No email provided',
        phone: formData.phone,
        message: formData.message,
        timestamp: Date.now(),
      });

      // After form submission, do not remove blur from images
      setIsContactFormOpen(false);

      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error writing to Firebase:", error);
    }
  };

  const handleImageClick = (index: number) => {
    // If it's the elevation building floor (floor-1),
    // clicking on image should open contact form while image remains blurred.
    if (selectedFloor.id === 'floor-1') {
      setIsContactFormOpen(true);
      // Don't change the blur state or anything related.
    } else {
      // For other floors, just change the current image index as normal.
      setCurrentImageIndex(index);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#15302d] mb-4">
            Project Details
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our thoughtfully designed spaces through detailed project
            information.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Floor Selection Buttons */}
          <div className="w-full lg:w-1/3 space-y-4">
            {floorPlans.map((floor) => (
              <motion.button
                key={floor.id}
                onClick={() => {
                  setSelectedFloor(floor);
                  setCurrentImageIndex(0);
                }}
                className={`w-full p-6 text-left rounded-lg shadow transition-colors duration-200 flex flex-col justify-between ${
                  selectedFloor.id === floor.id
                    ? 'bg-[#15302d] text-[#f6db98]'
                    : 'bg-white hover:bg-gray-100 text-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  {floor.images && floor.images[0] && (
                    <img
                      src={floor.images[0].src}
                      alt={floor.name}
                      className="w-12 h-12 mr-4 object-cover rounded-full"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{floor.name}</h3>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    selectedFloor.id === floor.id
                      ? 'text-[#f6db98]/80'
                      : 'text-gray-600'
                  }`}
                >
                  {floor.details}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-xl p-6">
            {selectedFloor.images ? (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#15302d]">
                  {selectedFloor.name}
                </h3>
                <div className="relative">
                  <img
                    src={selectedFloor.images[currentImageIndex].src}
                    alt={`${selectedFloor.name} ${currentImageIndex + 1}`}
                    className={`w-full rounded-lg ${
                      // Always keep blur if it's floor-1
                      selectedFloor.id === 'floor-1'
                        ? 'object-contain filter blur-sm cursor-pointer'
                        : 'object-contain cursor-pointer'
                    }`}
                    onClick={() => handleImageClick(currentImageIndex)}
                  />
                  {/* Navigation Buttons for floors with multiple images */}
                  {selectedFloor.id !== 'floor-1' && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 transition"
                      >
                        &#8592;
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 transition"
                      >
                        &#8594;
                      </button>
                    </>
                  )}
                </div>
                <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
                  {selectedFloor.images.map((img, index) => (
                    <img
                      key={index}
                      src={img.src}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 object-contain rounded-lg cursor-pointer ${
                        index === currentImageIndex ? 'border-2 border-[#15302d]' : 'border'
                      } ${selectedFloor.id === 'floor-1' ? 'filter blur-sm' : ''}`}
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mt-4">
                  {selectedFloor.images[currentImageIndex].details}
                </p>
              </div>
            ) : selectedFloor.priceDetails ? (
              <div className="relative">
                {/* Price details remain as is. They are not requested to be blurred. */}
                <h3 className="text-2xl font-semibold mb-4 text-[#15302d]">
                  Price Details - MADEN NOVA 1
                </h3>
                {/* For larger screens */}
                <div className="hidden sm:block">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Unit
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Area (sq ft)
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Rate (₹/sq ft)
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Total (₹)
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Stamp Duty (₹)
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Registration (₹)
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            GST (₹)
                          </th>
                          <th className="py-2 px-2 border-b text-left text-sm font-medium text-gray-700">
                            Total Amount (₹)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedFloor.priceDetails.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.unit}
                            </td>
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.area}
                            </td>
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.rate.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.total.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.stampDuty.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.registration.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 border-b text-sm text-gray-700">
                              {item.gst.toLocaleString()}
                            </td>
                            <td className="py-2 px-2 border-b text-sm font-semibold text-gray-700">
                              {item.totalAmount.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* For mobile screens */}
                <div className="block sm:hidden">
                  <div className="space-y-4">
                    {selectedFloor.priceDetails.map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <h4 className="text-lg font-semibold mb-2">{item.unit}</h4>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Area:</span> {item.area} sq ft
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Rate:</span> ₹{item.rate.toLocaleString()}/sq ft
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Total:</span> ₹{item.total.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Stamp Duty:</span> ₹{item.stampDuty.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Registration:</span> ₹{item.registration.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">GST:</span> ₹{item.gst.toLocaleString()}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                          <span className="font-medium">Total Amount:</span> ₹{item.totalAmount.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">Select a floor to view details.</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsContactFormOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#15302d]">
              Contact Us
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d]"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsContactFormOpen(false)}
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
      )}
    </section>
  );
};

export default FloorMap;
