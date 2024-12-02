import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const { id } = useParams();
  const project = id ? projects.find(p => p.id === id) : null;

  if (project) {
    return (
      <div>
        <PageHeader
          title={project.title}
          subtitle={project.category}
          image={project.image}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#15302d] mb-6">Project Details</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">{project.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-[#15302d]">Client</h3>
                    <p>{project.details.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#15302d]">Location</h3>
                    <p>{project.details.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#15302d]">Year</h3>
                    <p>{project.details.year}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#15302d]">Size</h3>
                    <p>{project.details.size}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Our Amenities"
        subtitle="Luxurious amenities for ultimate comfort."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedSection key={project.id}>
              <a
                href={`/projects/${project.id}`}
                className="group block relative overflow-hidden rounded-lg"
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
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}