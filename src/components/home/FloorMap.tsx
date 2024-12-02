// src/components/floor-map/BuildingMap.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface Room {
  id: string;
  name: string;
  width: string;
  height: string;
  position: string;
  color: string;
}

interface BuildingMapProps {
  imageSrc?: string; // Optional prop
}

const rooms: Room[] = [
  {
    id: 'living',
    name: 'Living Room',
    width: 'w-1/2',
    height: 'h-64',
    position: 'left-0 top-0',
    color: 'bg-[#3c605b]',
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    width: 'w-1/4',
    height: 'h-40',
    position: 'right-0 top-0',
    color: 'bg-[#15302d]',
  },
  {
    id: 'dining',
    name: 'Dining Room',
    width: 'w-1/4',
    height: 'h-40',
    position: 'right-1/4 top-0',
    color: 'bg-[#b48c2e]',
  },
  {
    id: 'master',
    name: 'Master Bedroom',
    width: 'w-1/3',
    height: 'h-48',
    position: 'left-0 bottom-0',
    color: 'bg-[#3c605b]',
  },
  {
    id: 'bath',
    name: 'Bathroom',
    width: 'w-1/6',
    height: 'h-24',
    position: 'left-1/3 bottom-0',
    color: 'bg-[#15302d]',
  },
  {
    id: 'study',
    name: 'Study Room',
    width: 'w-1/4',
    height: 'h-48',
    position: 'right-0 bottom-0',
    color: 'bg-[#b48c2e]',
  },
];

const BuildingMap: React.FC<BuildingMapProps> = ({ imageSrc }) => {
  const [hoveredRoom, setHoveredRoom] = React.useState<string | null>(null);

  return (
    <div className="p-8">
      <div
        className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden"
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay Image if imageSrc is provided */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Building Map"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.3 }} // Adjust opacity as needed
          />
        )}

        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className={`absolute ${room.width} ${room.height} ${room.position} ${room.color} cursor-pointer
              transition-colors duration-200`}
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredRoom === room.id ? 0.9 : 0.7 }}
            whileHover={{ opacity: 0.9 }}
            onHoverStart={() => setHoveredRoom(room.id)}
            onHoverEnd={() => setHoveredRoom(null)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#f6db98] font-medium text-sm">{room.name}</span>
            </div>
            {hoveredRoom === room.id && (
              <motion.div
                className="absolute inset-0 border-2 border-[#f6db98]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#15302d] mb-4">Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="flex items-center space-x-2">
              <div className={`w-4 h-4 ${room.color} rounded`} />
              <span className="text-sm text-gray-700">{room.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingMap;
