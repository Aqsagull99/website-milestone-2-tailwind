// app/bloom/page.tsx
import React from 'react';
import Image from 'next/image';

const BloomPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-green-50">
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Centered Heading */}
        <h1 className="text-center text-4xl md:text-6xl font-bold text-green-600 mb-5">
          Blooming Wonders
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl">
          Discover the beauty of blooming flora and the vibrant colors of nature. Join us in celebrating
          the wonders of growth and transformation.
        </p>
      </div>

      {/* Centered Thank You Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src="/thank-you1.jpg" 
          alt="Thank You"
          width={300}
          height={300}
          className="mb-4"
        />
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-xl">
          Thank you for exploring the blooming wonders with us. We hope you enjoy the beauty of nature!
        </p>
      </div>
    </div>
  );
};

export default BloomPage;
