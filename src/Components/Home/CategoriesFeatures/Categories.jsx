import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { motion } from 'framer-motion';
import api from '../../../Api/axios';
import Loader from '../../../Loader/Loader';
import { Helmet } from 'react-helmet-async';


const Categories = () => {
 const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
const navigate=useNavigate()
  useEffect(() => {
    api.get('/categories')
      .then(res => {
        setCategories(res.data.slice(0, 6));
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
        setLoading(false)
      });
  }, []);

  
    if (loading) return <Loader></Loader>
    
  

    return (
      <div>
      <h2 className="text-3xl font-bold text-center mb-6">Our Categories</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 p-4">
         <Helmet>
                <title>Categories|Brimmart  </title>
          </Helmet>
           
      {categories.map((item, idx) => (
        <div  
          key={idx}
          className="card  shadow-xl hover:shadow-2xl cursor-pointer"
          onClick={() => navigate(`/category/${item.category}`)}
        >
          <figure className="h-40 flex justify-center items-center">
            <motion.img
             src={item.image} alt={item} 
             className="h-full w-11/12"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }} />
          </figure>
          <div className=" btn bg-primary card-body text-center text-white">
            <button className=" text-xl font-semibold">{item.category}</button>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default Categories;