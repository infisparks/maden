import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloorMapTabs from '../floor-map/FloorMapTabs';
import FloorOverview from '../floor-map/FloorOverview';
import FloorAmenities from '../floor-map/FloorAmenities';
import BuildingMap from '../floor-map/BuildingMap';
import second from './../../icon/2.jpg'
import third from './../../icon/1.jpg'

const floorPlans = [
  {
    id: 'floor-1',
    name: 'First Floor',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3',
    details: 'Living Room • Kitchen • Dining Area • Guest Room',
    amenities: ['Smart Home System', 'Heated Floors', 'Natural Lighting']
  },
  {
    id: 'floor-2',
    name: 'Second Floor',
    image: second,
    details: 'Master Suite • 2 Bedrooms • Study Room',
    amenities: ['Walk-in Closets', 'En-suite Bathrooms', 'Private Balcony']
  },
  {
    id: 'floor-3',
    name: 'Rooftop',
    image: third,
    details: 'Garden Terrace • Entertainment Area • Pool',
    amenities: ['Infinity Pool', 'Outdoor Kitchen', 'Lounge Area']
  },
  {
    id: 'floor-3',
    name: 'Rooftop',
    image: third,
    details: 'Garden Terrace • Entertainment Area • Pool',
    amenities: ['Infinity Pool', 'Outdoor Kitchen', 'Lounge Area']
  }
  
];

export default function FloorMap() {
  const [selectedFloor, setSelectedFloor] = useState(floorPlans[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#15302d] mb-4">
            Interactive Floor Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our thoughtfully designed spaces through interactive floor plans
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            {floorPlans.map((floor) => (
              <motion.button
                key={floor.id}
                onClick={() => setSelectedFloor(floor)}
                className={`w-full p-4 text-left rounded-lg transition-colors duration-200 ${
                  selectedFloor.id === floor.id
                    ? 'bg-[#15302d] text-[#f6db98]'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-semibold">{floor.name}</h3>
                <p className={`text-sm ${
                  selectedFloor.id === floor.id ? 'text-[#f6db98]/80' : 'text-gray-600'
                }`}>
                  {floor.details}
                </p>
              </motion.button>
            ))}
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <FloorMapTabs activeTab={activeTab} onTabChange={setActiveTab} />
              
              <div className="relative">
                <motion.div
                  className="relative"
                  layoutId="floorplan"
                  transition={{ duration: 0.5 }}
                >
                  {activeTab === 'overview' && (
                    <FloorOverview
                      floor={selectedFloor}
                      isZoomed={isZoomed}
                      onZoomToggle={() => setIsZoomed(!isZoomed)}
                    />
                  )}
                  {/* {activeTab === 'amenities' && (
                    <FloorAmenities floor={selectedFloor} />
                  )} */}
                  {activeTab === 'map' && <BuildingMap />}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}