"use client"

import Link from 'next/link';
import { useState } from 'react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
           <div className="flex items-center">
            
            <h1 className="text-primary text-2xl font-bold">WildBloom 🌼</h1>
          </div> 

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-secondary focus:outline-none">
              {isOpen ? '✖️' : '☰'} 
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link href="/" className="text-secondary hover:text-green-500 transition duration-300">
              Home 🌿
            </Link>
            <Link href="/nature" className="text-secondary hover:text-green-500 transition duration-300">
              
              Nature 🌳
            </Link>
            <Link href="/bloom" className="text-secondary hover:text-green-500 transition duration-300">
            Bloom 🌺
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-2 px-4 py-2 bg-white">
          <Link href="/" className="text-secondary hover:text-green-500 transition duration-300">
            Home 🌿
          </Link>
          <Link href="/nature" className="text-secondary hover:text-green-500 transition duration-300">
            
            Nature 🌳
          </Link>
          <Link href="/bloom" className="text-secondary hover:text-green-500 transition duration-300">
          Bloom 🌺
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

