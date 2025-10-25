// FloorMap.js

import { useState } from 'react';
import { motion } from 'framer-motion';

import second from './../../icon/2.jpg';
import third from './../../icon/1.jpg';
import first from './../../icon/3.jpg';
import fouth from './../../icon/4.jpg';
import e3 from './../../icon/Top.jpeg';
import BHK from './../../icon/1BHK.jpg';
import RK from './../../icon/1RK.jpg';
import qRK from './../../icon/1RK2.jpg';
import Floor_plan from './../../icon/Floor_plan.jpg';
import e1 from './../../icon/nm1.jpeg';
import e2 from './../../icon/nm2.jpeg';
import kg from './../../icon/kaj.png';

const floorPlans = [
  {
    id: 'floor-1',
    name: 'Elevation',
    images: [
      { src: e2, details: 'Elevation image 1' },
      { src: e1, details: 'Elevation image 2' },
      { src: e3, details: 'Elevation image 3' }
    ],
  },
  {
    id: 'floor-2',
    name: 'Amenities',
    images: [
      { src: fouth, details: 'Double Height Luxury Lobby' },
      { src: kg, details: '⁠Kajaria CP Fittings' },
      { src: third, details: 'Modular kitchens' },
      { src: first, details: '⁠Highly Trained Security' },
      { src: second, details: 'Sofa-cum-bed' },
    ],
  },
  {
    id: 'floor-3',
    name: 'Floor Plan',
    images: [
      { src: BHK, details: '1BHK' },
      { src: RK, details: '1RK' },
      { src: qRK, details: '1RK Type-2' },
      { src: Floor_plan, details: 'Floor Plan' },
    ],
  },
];

const FloorMap = () => {
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

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
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
          className="text-center mb-16 mt-16"
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
                  {/* You can add additional description here if needed */}
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
                  <div className="flex justify-center items-center">
                    <img
                      src={selectedFloor.images[currentImageIndex].src}
                      alt={`${selectedFloor.name} ${currentImageIndex + 1}`}
                      className={`${
                        selectedFloor.id === 'floor-3' ? '' : 'w-full h-auto'
                      } object-contain rounded-lg ${
                        selectedFloor.id === 'floor-1'
                          ? 'cursor-default'
                          : 'cursor-pointer'
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

                  {/* Thumbnail Carousel */}
                  <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
                    {selectedFloor.images.map((img, index) => (
                      <img
                        key={index}
                        src={img.src}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-16 h-16 object-contain rounded-lg cursor-pointer ${
                          index === currentImageIndex
                            ? 'border-2 border-[#15302d]'
                            : 'border'
                        }`}
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                  </div>
                  {/* Thumbnail Carousel Ends */}
                </div>
                <p className="text-xl text-gray-900 mt-4">
                  {selectedFloor.images[currentImageIndex].details}
                </p>
              </div>
            ) : (
              <p className="text-gray-600">Select a floor to view details.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorMap;
