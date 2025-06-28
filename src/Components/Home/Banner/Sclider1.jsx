import React from 'react';
import { motion } from "framer-motion";
const Slider1 = () => {
    return (
       <div className="relative w-11/12 mx-auto rounded-2xl bg-white flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-16 gap-6">
      <motion.div
        className="max-w-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold">Lady's Collections</h2>
        <p className="my-2 text-gray-600">Spring has arrived. Stock up on denim and sweatshirts!</p>
        <button className="btn btn-primary">SHOP NOW</button>
      </motion.div>
      <motion.img
        src="/assets/woman-3.jpg"
        alt="Boy Model"
        className="h-96 object-cover"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
    );
};

export default Slider1;