// src/components/Header.tsx

import React from 'react';
import { Menu } from 'lucide-react';
import NavMenu from './NavMenu';
import madenLogo from '../../maden.png'; // Adjust the path based on your file structure

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-[#15302d]/95 backdrop-blur-sm z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={madenLogo}
              alt="MADEN Logo"
              style={{ height: '60px', width: 'auto' }}
            />
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <NavMenu />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#f6db98]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavMenu mobile onLinkClick={handleLinkClick} />
          </div>
        </div>
      )}
    </header>
  );
}
