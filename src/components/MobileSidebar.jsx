"use client"
import React, { useState } from 'react';
import styles from '../styles/mobileSidebar.module.css' // Include your CSS or use inline styles

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-1/3 right-0">
      <div className="relative">
        {/* Hamburger icon */}
        <button className={`${styles.hamburgerMenu} ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}>
          <div className={`${styles.hamburgerBar}`}></div>
          <div className={`${styles.hamburgerBar}`}></div>
          <div className={`${styles.hamburgerBar}`}></div>
        </button>

        {/* Drawer */}
        <div className={`absolute top-0 right-0 bg-white w-64 h-screen p-4 shadow-lg ${isOpen ? '' : 'hidden'}`}>
          {/* Drawer content goes here */}
          <p>This is the drawer content.</p>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;