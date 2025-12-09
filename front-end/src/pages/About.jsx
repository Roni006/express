// AboutUs.jsx

import { useLocation } from "react-router";

const AboutUs = () => {
  const data = useLocation();
  console.log(data);
  return (
    <div className="w-full">

      {/* Banner Section */}
      <section className="relative w-full h-[300px] flex items-center justify-center bg-gray-800">
        <img
          src="https://via.placeholder.com/1600x300.png?text=About+Us+Banner"
          alt="About Us Banner"
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:flex md:items-center md:gap-10">
        <div className="md:w-1/2"> 
          <div className="md:w-1/2 relative h-64 md:h-80 lg:h-96">
            <img
              src="https://via.placeholder.com/1600x300.png?text=About+Us+Banner"
              alt="About Us Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            We are a team of dedicated professionals committed to providing
            the best services and experiences for our clients. Our focus is on
            innovation, quality, and customer satisfaction.
          </p>
          <p className="text-gray-700">
            Our journey started with a vision to make services accessible and
            enjoyable for everyone. We value collaboration, creativity, and
            continuous learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To deliver high-quality services and innovative solutions that
              make a real difference in people's lives.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be a leading organization recognized for excellence,
              creativity, and impact, creating value for our clients and
              community.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
