import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export default function Portfolio() {
  const featuredProjects = projects; // Display all projects
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('.project-card');
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.left <= window.innerWidth / 2 && rect.right >= window.innerWidth / 2) {
          currentIndex = index;
        }
      });
      setCurrentSection(currentIndex);
    }
  };

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const section = containerRef.current.querySelector(`#project-${index}`);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#15302d] mb-16">Our Amenities</h2>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
          onScroll={handleScroll}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              id={`project-${index}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 project-card"
            >
              <Link
                to={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-lg block h-80"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with pointer-events-none */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15302d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
                    <h3 className="text-xl font-semibold text-[#f6db98]">{project.title}</h3>
                    <p className="text-[#f6db98]/80">{project.category}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-4 py-6">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSection === index ? 'bg-[#15302d]' : 'bg-gray-300'}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
      </div>
      {/* Inline CSS for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* for Internet Explorer 10+ */
          scrollbar-width: none;  /* for Firefox */
        }
      `}</style>
    </section>
  );
}
