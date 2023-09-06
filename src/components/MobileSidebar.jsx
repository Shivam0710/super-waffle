"use client"
import React, { useEffect, useState } from 'react';
import styles from '../styles/mobileSidebar.module.css' // Include your CSS or use inline styles

function MobileSidebar({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    // setIsOpen(!isOpen);
    setTimeout(() => {
        setIsOpen(!isOpen);
    }, 100)
  };

  useEffect(() => {
    if(isOpen) {
        window.addEventListener('click', (e) => {
            if(e.target.id !== "drawer") {
                setIsOpen(false);
                window.removeEventListener('click', toggleDrawer);
            }
        });
    }
    
    return () => window.removeEventListener('click', toggleDrawer);
  }, [isOpen])

  //add a function when clicking outside will close the drawer

  return (
    <div className="absolute w-1/3 right-0">
      <div className="relative">
        {/* Hamburger icon */}
        <button id='hamburger' className={`${styles.hamburgerMenu} ${isOpen ? 'open' : ''} absolute top-7 right-7`} onClick={toggleDrawer}>
          <img className='h-7' src="/hamburger.svg" alt="" />
        </button>

        {/* Drawer */}
        <div id='drawer' className={`absolute top-0 right-0 bg-[#1D1D41] w-64 h-screen p-4 shadow-lg ${isOpen ? '' : 'hidden'}`}>
          { categories.map((category, index) => (
            <a href={`/category/${category.name.split(" ").join("-")}`} className="py-4 px-5 text-sm flex items-center gap-3 cursor-pointer" key={index}> 
              <img className="h-6" src="/generic.png" alt="" />
              <p className="font-semibold">
                {category.name} 
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;