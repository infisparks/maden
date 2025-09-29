import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const { id } = useParams();
  const project = id ? projects.find(p => p.id === id) : null;

  // For the dot navigation effect
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;
    sections.forEach((section, index) => {
      if (section instanceof HTMLElement) { // Check if it's an HTMLElement
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentIndex = index;
        }
      }
    });
    setCurrentSection(currentIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`#section-${index}`);
    if (section instanceof HTMLElement) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  if (project) {
    return (
      <div>
        <PageHeader
          title={project.title}
          subtitle={project.category}
          image={project.image}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 section">
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

        <div className="flex justify-center space-x-4 py-6">
          {projects.map((_, index: number) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSection === index ? 'bg-[#15302d]' : 'bg-gray-300'}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
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
            <AnimatedSection key={project.id} className="section">
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

      <div className="flex justify-center space-x-4 py-6">
        {projects.map((_, index: number) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSection === index ? 'bg-[#15302d]' : 'bg-gray-300'}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>
    </div>
  );
}
