import React, { useState, useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';
import m1 from './../icon/m1.png';
import m2 from './../icon/m2.png';
import building from './../icon/building.png';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

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

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const FloorMapPage: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0,0);
  }, []);

  // const containerStyle: React.CSSProperties = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: '20px',
  //   fontFamily: 'Arial, sans-serif',
  //   maxWidth: '1200px',
  //   margin: '0 auto',
  // };

  // const sectionStyle: React.CSSProperties = {
  //   width: '100%',
  //   marginTop: '40px',
  //   padding: '20px',
  //   backgroundColor: '#f9f9f9',
  //   borderRadius: '8px',
  //   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  // };

  // const sectionTitleStyle: React.CSSProperties = {
  //   textAlign: 'center',
  //   fontSize: '2rem',
  //   marginBottom: '30px',
  //   color: '#333',
  // };

  // const mapImagesContainerStyle: React.CSSProperties = {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   gap: '20px',
  //   justifyContent: 'center',
  // };

  // const mapImageWrapperStyle: React.CSSProperties = {
  //   position: 'relative',
  //   flex: '1 1 45%',
  //   maxWidth: '500px',
  //   boxSizing: 'border-box',
  //   cursor: 'pointer',
  // };

  // const mapImageStyle: React.CSSProperties = {
  //   width: '100%',
  //   height: 'auto',
  //   borderRadius: '4px',
  //   objectFit: 'cover',
  //   transition: 'transform 0.3s ease',
  // };

  // const mapImageHoverStyle: React.CSSProperties = {
  //   transform: 'scale(1.05)',
  // };

  // const overlayStyle: React.CSSProperties = {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '#fff',
  //   fontWeight: 'bold',
  //   fontSize: '1.2rem',
  //   textAlign: 'center' as const,
  //   borderRadius: '4px',
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await push(ref(database, 'contacts'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: Date.now(),
      });
      setIsContactFormOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error("Error writing to Firebase:", error);
    }
  };

  return (
    <>
      <section id='top' className="flex pt-20 flex-col lg:flex-row justify-center items-center min-h-screen bg-[#18322F] p-6 md:p-12">
        <div className=" text-white lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#CFC29A] mb-4">
            Nova 1
          </h1>
          <p className="pt-4 text-base sm:text-lg leading-relaxed">
            The Nova, developed by Maden Multicorp LLP, is a flagship residential project that redefines urban luxury in the heart of Taloja, Navi Mumbai. Combining modern aesthetics with thoughtful functionality, it offers a range of studio apartments and 1 BHK homes designed to meet the needs of contemporary homeowners. Each home is equipped with premium features such as modular kitchens, sofa-cum-beds for optimized living spaces, vitrified tiles, and Kajaria CP fittings for durability and elegance. 
            <br /><br />
            Residents are welcomed by a grand double-height luxury lobby and enjoy 24/7 CCTV surveillance, branded lifts, and highly trained security staff for peace of mind.
          </p>
          <br />
          <p className='pt-4 text-base sm:text-lg leading-relaxed'>
          studios and 1 bhi starting from 20.7 lakh
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={building}
            alt="Nova Residential Building"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded shadow-lg"
          />
        </div>
      </section>

      <FloorMap/>
{/* 
      <div style={containerStyle}>
        <FloorMap />
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Floor Plan</h2>
          <div style={mapImagesContainerStyle}>
            <div
              style={mapImageWrapperStyle}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setIsContactFormOpen(true)}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={m1}
                  alt="Building Map 1"
                  style={{
                    ...mapImageStyle,
                    ...(hoveredImage === 1 ? mapImageHoverStyle : {}),
                    filter: 'blur(8px)',
                  }}
                />
                <div style={overlayStyle}>
                  View map
                </div>
              </div>
            </div>
            <div
              style={mapImageWrapperStyle}
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => setIsContactFormOpen(true)}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={m2}
                  alt="Building Map 2"
                  style={{
                    ...mapImageStyle,
                    ...(hoveredImage === 2 ? mapImageHoverStyle : {}),
                    filter: 'blur(8px)',
                  }}
                />
                <div style={overlayStyle}>
View Map                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-xl transform transition-all">
            <button
              onClick={() => setIsContactFormOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold transition-colors"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#15302d] text-center">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              Please fill out the form below and we will get back to you.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] py-2 px-3"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] py-2 px-3"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] py-2 px-3"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#15302d] focus:border-[#15302d] py-2 px-3"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsContactFormOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#15302d] text-white rounded-md hover:bg-[#1b3a37] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloorMapPage;
