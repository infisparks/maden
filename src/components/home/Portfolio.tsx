import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export default function Portfolio() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#15302d] mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link 
              key={project.title}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15302d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-[#f6db98]">
                    {project.title}
                  </h3>
                  <p className="text-[#f6db98]/80">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-[#b48c2e] text-white rounded hover:bg-[#15302d] transition-colors duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}