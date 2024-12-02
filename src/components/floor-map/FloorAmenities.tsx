import React from 'react';
import { motion } from 'framer-motion';

interface FloorAmenitiesProps {
  floor: {
    name: string;
    amenities: string[];
  };
}

export default function FloorAmenities({ floor }: FloorAmenitiesProps) {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#15302d] mb-4">
        {floor.name} Amenities
      </h3>
      <ul className="space-y-4">
        {floor.amenities.map((amenity, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-2 h-2 bg-[#b48c2e] rounded-full" />
            <span className="text-gray-700">{amenity}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}