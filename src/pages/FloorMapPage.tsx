import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';
import m1 from './../icon/m1.png'; // Adjust the path based on your project structure
import m2 from './../icon/m2.png'; // Adjust the path based on your project structure

const FloorMapPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate(); // Hook to handle page redirection

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isModalOpen]);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const innerContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    alignSelf: 'center',
  };

  const sectionTitleStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#333',
  };

  const mapImagesContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const mapImageWrapperStyle: React.CSSProperties = {
    flex: '1 1 45%',
    maxWidth: '500px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    position: 'relative',
  };

  const mapImageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    objectFit: 'cover',
    filter: 'blur(5px)', // Apply blur effect by default
  };

  // Handle redirect to the contact form page
  const handleViewImageClick = () => {
    navigate('/contact'); // Redirect to the contact page
  };

  return (
    <div style={containerStyle}>
      <PageHeader
        title="Projects"
        subtitle="Explore our thoughtfully designed spaces"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      <div style={innerContainerStyle}>
        <FloorMap />
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Building Map</h2>
          <div style={mapImagesContainerStyle}>
            {/* First Map Image */}
            <div
              style={mapImageWrapperStyle}
              onClick={handleViewImageClick} // Redirect on click
              aria-label="View Building Map 1 in full screen"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleViewImageClick(); // Redirect on Enter/Space key press
                }
              }}
            >
              <img
                src={m1}
                alt="Building Map 1"
                style={mapImageStyle}
              />
              <button
                onClick={handleViewImageClick} // Redirect when the button is clicked
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Image
              </button>
            </div>

            {/* Second Map Image */}
            <div
              style={mapImageWrapperStyle}
              onClick={handleViewImageClick} // Redirect on click
              aria-label="View Building Map 2 in full screen"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleViewImageClick(); // Redirect on Enter/Space key press
                }
              }}
            >
              <img
                src={m2}
                alt="Building Map 2"
                style={mapImageStyle}
              />
              <button
                onClick={handleViewImageClick} // Redirect when the button is clicked
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Image
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Implementation */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            overflow: 'auto',
          }}
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={closeModal}
              ref={closeButtonRef}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full Screen Building Map"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorMapPage;
