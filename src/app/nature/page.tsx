"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 


const images = [
 "/s7.jpg",
   "/s2.jpg",
  "/s9.jpg",
  // "/s4.jpg",
  "/s5.jpg",
  "/s6.jpg",
];

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % images.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen relative bg-white">
      {/* Slider Images */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial="center"
          animate={positions[positionIndexes[index] % positions.length]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "80%", maxWidth: "600px", position: "absolute" }}
        >
          <Image
            src={image}
            alt={`slider-image-${index}`}
            className="rounded-[12px]"
            layout="responsive"
            objectFit="cover"
            width={400}
            height={300}
          />
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <div className="flex flex-row gap-3 z-10 mt-5">
        <button
          className="text-black bg-gray-300 rounded-md py-2 px-4 transition-transform transform hover:scale-105"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-black bg-gray-300 rounded-md py-2 px-4 transition-transform transform hover:scale-105"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;



