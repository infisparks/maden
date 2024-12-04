import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';
import m1 from './../icon/m1.png'; // Adjust the path based on your project structure
import m2 from './../icon/m2.png'; // Adjust the path based on your project structure
import building from './../icon/building.png';

const FloorMapPage: React.FC = () => {
  // Correctly typed state
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);

  // Inline styles with explicit typing
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // 'column' is a valid FlexDirection
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px', // Restrict max width for centered content
    margin: '0 auto', // Center the container
  };

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const sectionTitleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
  };

  const mapImagesContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap', // 'wrap' is a valid FlexWrap
    gap: '20px',
    justifyContent: 'center',
  };

  const mapImageWrapperStyle: React.CSSProperties = {
    flex: '1 1 45%',
    maxWidth: '500px',
    boxSizing: 'border-box',
  };

  const mapImageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    objectFit: 'cover', // 'cover' is a valid ObjectFit
    transition: 'transform 0.3s ease',
  };

  const mapImageHoverStyle: React.CSSProperties = {
    transform: 'scale(1.05)',
  };

  return (
    <>
      {/* PageHeader is outside the container to take full width */}
      {/* <PageHeader
        title="Nova 1"
        subtitle="Explore our thoughtfully designed spaces"
        image={building}
      /> */}
      
      <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-[#18322F] p-6 md:p-12">
      {/* Text Content */}
      <div className="text-white lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#CFC29A] mb-4">
          Nova 1
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          The Nova, crafted by Maden Multicorp LLP, is a premier residential project in Taloja, Navi Mumbai, blending modern aesthetics with innovative design. It offers studio apartments and 1 BHK homes tailored for contemporary living, featuring modular kitchens, sofa-cum-beds, double-height luxury lobbies, and 24/7 security. Strategically located near the Mumbai-Pune Expressway, it provides seamless connectivity to essential amenities like schools, hospitals, and business hubs. The Nova redefines urban living, offering luxury, practicality, and convenience in one space.
        </p>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={building}
          alt="Nova Residential Building"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded shadow-lg"
        />
      </div>
    </section>

      {/* Main Content Container */}
      <div style={containerStyle}>
        <FloorMap />

        {/* Building Map Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Floor Plan</h2>
          <div style={mapImagesContainerStyle}>
            {/* First Map Image */}
            <div
              style={mapImageWrapperStyle}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={m1}
                alt="Building Map 1"
                style={{
                  ...mapImageStyle,
                  ...(hoveredImage === 1 ? mapImageHoverStyle : {}),
                }}
              />
            </div>

            {/* Second Map Image */}
            <div
              style={mapImageWrapperStyle}
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={m2}
                alt="Building Map 2"
                style={{
                  ...mapImageStyle,
                  ...(hoveredImage === 2 ? mapImageHoverStyle : {}),
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FloorMapPage;
