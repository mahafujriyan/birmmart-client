import React from 'react';
import {motion} from 'framer-motion'
const Slider2 = () => {
    return (
         <div className="hero w-11/12 mx-auto rounded-2xl bg-neutral text-white">
      <div className="hero-content flex-col lg:flex-row">
        <motion.img src="/assets/bag-9-219x280.jpg" className="h-96 object-cover"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }} />
        <motion.div>
          <h1 className="text-5xl font-bold">Men's Boot Collection</h1>
          <p className="py-6">
            Trendy and durable boots for all seasons. <br />
            🔥 Super Deal: <span className="text-yellow-300 font-bold">Flat 40% OFF</span>
          </p>
          <button className="btn btn-warning">Shop Boots</button>
        </motion.div>
      </div>
    </div>
    );
};

export default Slider2;