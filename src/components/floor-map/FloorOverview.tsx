import React from 'react';
import { ZoomIn, ZoomOut, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloorOverviewProps {
  floor: {
    image: string;
    name: string;
  };
  isZoomed: boolean;
  onZoomToggle: () => void;
}

export default function FloorOverview({ floor, isZoomed, onZoomToggle }: FloorOverviewProps) {
  return (
    <div className="relative">
      <img
        src={floor.image}
        alt={floor.name}
        className={`w-full h-[500px] object-cover transition-transform duration-300 ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
      />
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={onZoomToggle}
          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
        >
          {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
        </button>
        <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}