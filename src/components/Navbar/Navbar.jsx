import React, { useEffect } from 'react';
import { initializeNavbarEvents } from './helpers/navbarHelpers';

// Lista de ítems del menú
const menuItems = [
  { href: '#hero', icon: 'bi-house', label: 'Home' },
  { href: '#about', icon: 'bi-person', label: 'About' },
  { href: '#portfolio', icon: 'bi-images', label: 'Gallery' },
  { href: '#services', icon: 'bi-hdd-stack', label: 'Sets' },
  { href: '#resume', icon: 'bi-file-earmark-text', label: 'Gigs' },
  { href: '#contact', icon: 'bi-envelope', label: 'Contact' },
];

export const Navbar = () => {
  useEffect(() => {
    // Inicializamos los eventos de la navbar
    const cleanup = initializeNavbarEvents();

    // Cleanup event listeners al desmontar el componente
    return () => {
      cleanup();
    };
  }, []);

  return (
    <header
      id="header"
      className="header d-flex flex-column justify-content-center"
    >
      <i className="header-toggle d-xl-none bi bi-list" />
      <nav id="navmenu" className="navmenu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className={index === 0 ? 'active' : ''}>
                <i className={`bi ${item.icon} navicon`} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
