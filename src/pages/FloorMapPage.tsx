import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';
import m1 from './../icon/m1.png';
import m2 from './../icon/m2.png';
import Projects from '../components/Projects';
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAay8M_58K8RXHCfzmM2Gdw7dEgGmwz1sw",
  authDomain: "maden-infispark.firebaseapp.com",
  projectId: "maden-infispark",
  storageBucket: "maden-infispark.appspot.com",
  messagingSenderId: "1047210661059",
  appId: "1:1047210661059:web:4a372d286c5d0406fc3e76",
  measurementId: "G-FLCGBKNL0V"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const FloorMapPage: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);
  const [unblurredImages, setUnblurredImages] = useState<boolean[]>([false, false]); // Track both images
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const unblurred = localStorage.getItem('unblurredImages');
    if (unblurred) {
      setUnblurredImages(JSON.parse(unblurred));
    }
  }, []);

  const openContactForm = () => {
    setIsContactFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isContactFormOpen) {
        closeContactForm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isContactFormOpen]);

  useEffect(() => {
    if (isContactFormOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isContactFormOpen]);

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

  const mapImageStyle = (imageIndex: number): React.CSSProperties => ({
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    objectFit: 'cover',
    filter: unblurredImages[imageIndex] ? 'none' : 'blur(5px)',
  });

  const handleViewImageClick = (imageIndex: number) => {
    if (unblurredImages[imageIndex]) {
      // Image already unblurred
    } else {
      openContactForm();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const contactsRef = ref(database, 'contacts');
      await push(contactsRef, {
        name: formData.name,
        email: formData.email || 'No email provided',
        phone: formData.phone,
        message: formData.message,
        timestamp: Date.now(),
      });

      // Set both images to unblurred and update the state
      const updatedUnblurredImages = [true, true];
      setUnblurredImages(updatedUnblurredImages);
      localStorage.setItem('unblurredImages', JSON.stringify(updatedUnblurredImages));

      closeContactForm();
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error writing to Firebase:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <PageHeader
        title="Projects"
        subtitle="Explore our thoughtfully designed spaces"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      <Projects />
      <div style={innerContainerStyle}>
        <FloorMap unblurredImages={[]} onViewPrice={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Building Map</h2>
          <div style={mapImagesContainerStyle}>
            {/* First Map Image */}
            <div
              style={mapImageWrapperStyle}
              onClick={() => handleViewImageClick(0)}
              aria-label="View Building Map 1"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleViewImageClick(0);
                }
              }}
            >
              <img
                src={m1}
                alt="Building Map 1"
                style={mapImageStyle(0)}
              />
              {!unblurredImages[0] && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewImageClick(0);
                  }}
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
              )}
            </div>

            {/* Second Map Image */}
            <div
              style={mapImageWrapperStyle}
              onClick={() => handleViewImageClick(1)}
              aria-label="View Building Map 2"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleViewImageClick(1);
                }
              }}
            >
              <img
                src={m2}
                alt="Building Map 2"
                style={mapImageStyle(1)}
              />
              {!unblurredImages[1] && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewImageClick(1);
                  }}
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
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={closeContactForm}
          aria-modal="true"
          role="dialog"
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '40px 30px',
              borderRadius: '10px',
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeContactForm}
              ref={closeButtonRef}
              aria-label="Close Modal"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#b48c2e',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorMapPage;
