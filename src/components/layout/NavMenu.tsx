// src/components/NavMenu.tsx

// import React from 'react';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function NavMenu({ mobile = false, onLinkClick }: NavMenuProps) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/floor-plans', label: 'Projects' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  const baseStyles =
    'text-[#f6db98] hover:text-[#b48c2e] transition-colors duration-200';
  const mobileStyles = 'block px-2 py-2 text-base';
  const desktopStyles = 'text-sm font-medium';

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
          onClick={mobile ? onLinkClick : undefined}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
