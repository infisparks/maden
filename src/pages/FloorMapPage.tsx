import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';
import m1 from './../icon/m1.png'; // Adjust the path based on your project structure
import m2 from './../icon/m2.png'; // Adjust the path based on your project structure


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
      <PageHeader
        title="Floor Plans"
        subtitle="Explore our thoughtfully designed spaces"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      
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
