// FloorMap.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import second from './../../icon/2.jpg';
import third from './../../icon/1.jpg';
import first from './../../icon/3.jpg';

const floorPlans = [
  {
    id: 'floor-1',
    name: 'Elevation of Building',
    images: [
      third,
      second,
      first
    ],
    details: 'Detailed elevation plans and architectural designs showcasing the building structure.',
  },
  {
    id: 'floor-2',
    name: 'Amenities',
    images: [
      third,
      first,
      second,
    ],
    details: 'Explore the various amenities available within the building.',
  },
  {
    id: 'floor-3',
    name: 'Price Detail on Elevation',
    details: 'Comprehensive pricing details based on elevation and unit specifications.',
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

export default function FloorMap({ 
  unblurredImages,
  onViewPrice 
}: {
  unblurredImages: boolean[];
  onViewPrice: () => void;
}) {
  const [selectedFloor, setSelectedFloor] = useState(floorPlans[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const priceUnblurred = unblurredImages.every(Boolean);

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
            Explore our thoughtfully designed spaces through detailed project information.
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
                <div>
                  <h3 className="text-xl font-semibold">{floor.name}</h3>
                  <p className={`text-sm mt-2 ${
                    selectedFloor.id === floor.id ? 'text-[#f6db98]/80' : 'text-gray-600'
                  }`}>
                    {floor.details}
                  </p>
                </div>
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
                    src={selectedFloor.images[currentImageIndex]}
                    alt={`${selectedFloor.name} ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  {/* Navigation Buttons */}
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
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {selectedFloor.images.map((_, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full cursor-pointer ${
                        index === currentImageIndex
                          ? 'bg-[#15302d]'
                          : 'bg-gray-300'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
                <p className="text-gray-700 mt-4">{selectedFloor.details}</p>
              </div>
            ) : selectedFloor.priceDetails ? (
              <div className="relative">
                {priceUnblurred ? (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#15302d]">
                      Price Details - MADEN NOVA 1
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white">
                        <thead>
                          <tr>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Unit
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Area (sq ft)
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Rate ($/sq ft)
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Total ($)
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Stamp Duty ($)
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Registration ($)
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              GST ($)
                            </th>
                            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                              Total Amount ($)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedFloor.priceDetails.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.unit}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.area}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.rate.toLocaleString()}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.total.toLocaleString()}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.stampDuty.toLocaleString()}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.registration.toLocaleString()}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700">
                                {item.gst.toLocaleString()}
                              </td>
                              <td className="py-2 px-4 border-b text-sm text-gray-700 font-semibold">
                                {item.totalAmount.toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="filter blur-sm">
                      <h3 className="text-2xl font-semibold mb-4 text-[#15302d]">
                        Price Details - MADEN NOVA 1
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Unit
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Area (sq ft)
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Rate ($/sq ft)
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Total ($)
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Stamp Duty ($)
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Registration ($)
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                GST ($)
                              </th>
                              <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700">
                                Total Amount ($)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedFloor.priceDetails.map((item, index) => (
                              <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.unit}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.area}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.rate.toLocaleString()}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.total.toLocaleString()}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.stampDuty.toLocaleString()}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.registration.toLocaleString()}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700">
                                  {item.gst.toLocaleString()}
                                </td>
                                <td className="py-2 px-4 border-b text-sm text-gray-700 font-semibold">
                                  {item.totalAmount.toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* View Price Button */}
                    <button
                      onClick={onViewPrice}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-lg rounded-lg hover:bg-opacity-70 transition"
                    >
                      View Price
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-600">Select a floor to view details.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
