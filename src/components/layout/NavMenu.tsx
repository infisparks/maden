import React from 'react';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  mobile?: boolean;
}

export default function NavMenu({ mobile = false }: NavMenuProps) {
  const links = [
   
    { to: '/about', label: 'About Us' },
    { to: '/floor-plans', label: 'Projects' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  const baseStyles = 'text-[#f6db98] hover:text-[#b48c2e] transition-colors duration-200';
  const mobileStyles = 'block px-3 py-2 text-base';
  const desktopStyles = 'text-sm font-medium';

  return (
    <>
      <Link to="/" className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}>
        Home
      </Link>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={`${baseStyles} ${mobile ? mobileStyles : desktopStyles}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}