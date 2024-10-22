import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-primary py-6 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg mb-2">
          &copy; {new Date().getFullYear()} WildBloom by Aqsa Gull 🌸. All Rights Reserved. 
          <span className="block text-sm mt-2">
            Bringing you closer to nature every day! 🌿✨
          </span>
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/Aqsagull99" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-pink-500 hover:text-gray-300 transition duration-300 bg-pink-200 p-2 rounded-full"
          >
            <FaGithub size={24} />
            <span className="hidden md:block">GitHub</span> 
          </a>
          <a
            href=" https://www.linkedin.com/in/aqsa-gullofficial99" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-pink-500 hover:text-gray-300 transition duration-300 bg-pink-200 p-2 rounded-full"
          >
            <FaLinkedin size={24} />
            <span className="hidden md:block">LinkedIn</span> 
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
