// app/page.tsx

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen mt-10">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="md:w-1/2 p-4 md:p-10">
          <h1 className="text-4xl font-bold text-black text-left md:text-5xl">
            Discover Nature&#39;s Beauty with WildBloom
          </h1>

          <p className="mt-4 text-lg text-gray-700 md:text-xl">
            Explore the beauty of nature and bloom with us. Discover the wonders of the wild!
          </p>
        </div>
        <Image
          src="/hero2.jpg"
          alt="Hero Image"
          width={600} // Adjust according to your layout
          height={400}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
      </section>

      {/* Section 1 */}
      <section className="py-16 bg-white text-black flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16">
        {/* Images Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src="/card4.jpg"
            alt="Card 1"
            width={250}
            height={350}
            className="w-full md:w-64 h-auto object-cover rounded-lg"
          />
          <Image
            src="/card2.jpg"
            alt="Card 2"
            width={250}
            height={350}
            className="w-full md:w-64 h-auto object-cover rounded-lg"
          />
          <Image
            src="/card3.jpg"
            alt="Card 3"
            width={250}
            height={350}
            className="w-full md:w-64 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-4 md:p-10 text-center md:text-left md:ml-10">
          <h2 className="text-3xl font-bold mb-4">Blooming Together</h2>
          <p className="max-w-xl mx-auto md:mx-0">
            At WildBloom, we aim to inspire and connect with nature through every bloom. Join us on this journey to explore the beauty of the natural world.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 text-black text-center ">
        <h2 className="text-3xl font-bold mb-4">Discover Nature</h2>
        <p className="max-w-2xl mx-auto mb-10">
          Experience the tranquility and beauty of nature with our curated selections. Discover how to bring the wonders of the outdoors into your life.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
          <div className="relative h-56 md:h-72 lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url(/dcard1.jpg)' }}
            ></div>
          </div>
          <div className="relative h-56 md:h-72 lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url(/dcard2.jpg)' }}
            ></div>
          </div>
          <div className="relative h-56 md:h-72 lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url(/dcard3.jpg)' }}
            ></div>
          </div>
          <div className="relative h-56 md:h-72 lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url(/dcard7.jpg)' }}
            ></div>
          </div>
          <div className="relative h-56 md:h-72 lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url(/dcard5.jpg)' }}
            ></div>
          </div>
          <div className="relative h-56 md:h-72 lg:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url(/dcard6.jpg)' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Unique Section 3 */}
      <section className="py-16 text-black text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-4 shadow-md">Connect with Nature</h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg md:text-xl leading-relaxed">
          Join our vibrant community of nature lovers and explore the beauty of the outdoors together.
          Share your experiences, insights, and passion for nature with fellow enthusiasts.
          Let&#39;s inspire each other and cultivate a deeper connection with the natural world.
        </p>
        <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl leading-relaxed italic">
          Together, we can create lasting memories and make a positive impact on our environment.
        </p>
        <h3 className="text-2xl font-semibold mt-6">Why Join Us?</h3>
        <ul className="list-disc list-inside mx-auto text-left max-w-md mt-4">
          <li>🌼 Connect with like-minded individuals.</li>
          <li>🏞️ Participate in exciting outdoor events.</li>
          <li>📷 Share your favorite nature photos.</li>
          <li>🌿 Learn more about conservation efforts.</li>
        </ul>
      </section>
    </main>
  );
}
