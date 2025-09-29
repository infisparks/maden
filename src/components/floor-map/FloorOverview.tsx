// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FloorOverviewProps {
  floor: {
    image: string;
    name: string;
  };
}

export default function FloorOverview({ floor }: FloorOverviewProps) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/contact');
  };

  return (
    <div className="relative cursor-pointer" onClick={handleImageClick}>
      <img
        src={floor.image}
        alt={floor.name}
        className="w-full h-[500px] object-cover filter blur-[6px]"

      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
        >
          View Image
        </motion.div>
      </div>
    </div>
  );
}
