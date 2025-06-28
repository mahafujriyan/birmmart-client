
import React from 'react';
import { motion } from 'framer-motion';

const Slider3 = () => {
  return (
    <div
      className="relative w-11/12 mx-auto flex items-center justify-center bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/assets/08.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f6d]/80 to-[#ffc371]/80 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-16 text-white flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          className="max-w-lg text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Flash Sale: Summer Essentials
          </h1>
          <p className="py-6 text-base md:text-lg">
            Don&apos;t miss out on our summer clearance sale! <br />
            🌞 Save up to <span className="text-black font-bold">50% OFF</span> today only.
          </p>
          <button className="btn btn-accent">Shop Now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider3;

