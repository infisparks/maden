// import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import building from '../icon/building.png';

const ProjectComponent = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  // Function to handle the redirection
  const handleViewMoreClick = () => {
    navigate('/floor-plans');  // Redirect to the project page (adjust the route as needed)
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 text-[#18322F] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#18322F]">Our Upcoming Projects</h1>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side - Project Description */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-semibold">Nova 1</h2>
            <p className="text-lg leading-relaxed">
  The <span className="font-bold text-[#2C4F5F]">Nova</span>, crafted by <span className="font-bold text-[#2C4F5F]">Maden Multicorp LLP</span>, is a premier residential project in <span className="font-bold text-[#2C4F5F]">Taloja, Navi Mumbai</span>, blending modern aesthetics with innovative design. It offers <span className="font-bold text-[#2C4F5F]">studio apartments</span> and <span className="font-bold text-[#2C4F5F]">1 BHK homes</span> tailored for contemporary living, featuring <span className="font-bold text-[#2C4F5F]">modular kitchens</span>, <span className="font-bold text-[#2C4F5F]">sofa-cum-beds</span>, <span className="font-bold text-[#2C4F5F]">double-height luxury lobbies</span>, and <span className="font-bold text-[#2C4F5F]">24/7 security</span>. Strategically located near the <span className="font-bold text-[#2C4F5F]">Mumbai-Pune Expressway</span>, it provides seamless connectivity to essential amenities like schools, hospitals, and business hubs. The Nova redefines urban living, offering luxury, practicality, and convenience in one space.
</p>

            <p className="text-lg leading-relaxed">
              The goal is to address various challenges in the industry, such as inefficiencies in <span className="font-bold text-[#2C4F5F]">data management</span>, security vulnerabilities, and lack of integration across systems.
            </p>
            <div className="pt-4">
              <button 
                onClick={handleViewMoreClick}  // Attach the click handler to the button
                className="group bg-[#18322F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#2C4F5F] transition duration-300 flex items-center space-x-2"
              >
                <span>View Project Detail</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Project Image */}
          <div className="flex-1 lg:pl-8">
            <div className="relative w-full overflow-hidden rounded-lg shadow-2xl">
              <img
                src={building}
                alt="Nova ONE Project"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
