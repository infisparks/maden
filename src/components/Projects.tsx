import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import building from '../icon/building.png';

const ProjectComponent = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  // Function to handle the redirection
  const handleViewMoreClick = () => {
    navigate('/project');  // Redirect to the project page (adjust the route as needed)
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 text-[#18322F] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#18322F]">Our Projects</h1>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side - Project Description */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-semibold">Nova ONE</h2>
            <p className="text-lg leading-relaxed">
              This project focuses on developing an <span className="font-bold text-[#2C4F5F]">innovative solution</span> for modern infrastructure. It integrates <span className="font-bold text-[#2C4F5F]">AI-driven analytics</span> and <span className="font-bold text-[#2C4F5F]">cloud-based services</span> to create a seamless and scalable platform for users.
            </p>
            <p className="text-lg leading-relaxed">
              The goal is to address various challenges in the industry, such as inefficiencies in <span className="font-bold text-[#2C4F5F]">data management</span>, security vulnerabilities, and lack of integration across systems.
            </p>
            <div className="pt-4">
              <button 
                onClick={handleViewMoreClick}  // Attach the click handler to the button
                className="group bg-[#18322F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#2C4F5F] transition duration-300 flex items-center space-x-2"
              >
                <span>View More</span>
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
