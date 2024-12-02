import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
import { projects } from '../data/projects';

export default function GalleryPage() {
  const allImages = projects.flatMap(project => [project.image, ...project.gallery]);
  const uniqueImages = [...new Set(allImages)];

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="A visual journey through our architectural masterpieces"
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15302d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}