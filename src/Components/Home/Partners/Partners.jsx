import React, { useEffect, useState } from 'react';
import api from '../../../Api/axios';
import Loader from '../../../Loader/Loader';
import CompanyList from './CompanyList';
import { Helmet } from 'react-helmet-async';

const Partners = () => {
    const [categories,setCategories]=useState([])
      const [selectedCategory, setSelectedCategory] = useState(null);
      useEffect(()=>{
         api.get('/partners')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Failed to load categories', err));
      },[])
      if(!categories.length) return <Loader></Loader>

    return (
           <div className="p-6">
             <Helmet>
                    <title>Partner|Brimmart  </title>
              </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">Our Trusted Partners</h2>

      <div className="grid grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => (
          <div
            key={cat.category}
            onClick={() => setSelectedCategory(cat)}
            className="cursor-pointer border rounded-xl p-4 hover:shadow-lg transition duration-300 flex flex-col items-center bg-white"
          >
            <img
              src={cat.companies[0]?.logo}
              alt={cat.category}
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-lg text-primary font-semibold capitalize">{cat.category}</h3>
          </div>
        ))}   
      </div>

      {selectedCategory && (
        <CompanyList categoryData={selectedCategory} />
      )}
    </div>
    );
};

export default Partners;