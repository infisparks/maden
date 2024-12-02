import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';
import m1 from './../icon/m1.jpg'; // Adjust the path based on your project structure
import m2 from './../icon/m2.jpg'; // Adjust the path based on your project structure

const FloorMapPage: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

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
  };

  const mapImageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const mapImageHoverStyle: React.CSSProperties = {
    transform: 'scale(1.05)',
  };

  const modalOverlayStyle: React.CSSProperties = {
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
  };

  const modalContentStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    width: 'auto',
    height: 'auto',
    background: 'transparent',
    border: 'none',
    outline: 'none',
  };

  const modalImageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '8px',
  };

  const closeButtonStyle: React.CSSProperties = {
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
  };

  return (
    <div style={containerStyle}>
      <PageHeader
        title="Floor Plans"
        subtitle="Explore our thoughtfully designed spaces"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      <div style={innerContainerStyle}>
        <FloorMap />

        {/* Building Map Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Building Map</h2>
          <div style={mapImagesContainerStyle}>
            {/* First Map Image */}
            <div
              style={mapImageWrapperStyle}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => openModal(m1)}
              aria-label="View Building Map 1 in full screen"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(m1);
                }
              }}
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
              onClick={() => openModal(m2)}
              aria-label="View Building Map 2 in full screen"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(m2);
                }
              }}
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

      {/* Modal Implementation */}
      {isModalOpen && (
        <div style={modalOverlayStyle} onClick={closeModal} aria-modal="true" role="dialog">
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button
              style={closeButtonStyle}
              onClick={closeModal}
              ref={closeButtonRef}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full Screen Building Map" style={modalImageStyle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorMapPage;
