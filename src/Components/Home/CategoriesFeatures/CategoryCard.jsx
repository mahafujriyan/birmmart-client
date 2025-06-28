import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import api from '../../../Api/axios';
import Rating from '@mui/material/Rating';
import Loader from '../../../Loader/Loader';


const CategoryCard = () => {
    const {categoryName}=useParams()
    const [products,setProducts]=useState([])
      const [loading, setLoading] = useState(true);
    useEffect(()=>{
        api.get(`/products/category/${categoryName}`)
      .then(res => {
        setProducts(res.data);
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false)
      });

    },[categoryName])
      if (loading) return <Loader></Loader>
   
    return (
        <div className=' w-11/12 mx-auto '>
            <h2 className=" text-center text-3xl font-bold mb-4">Products in {categoryName}</h2>
        <div >
      
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="card bg-base-200 shadow-xl">
            <figure className="h-48 ">
              <img src={product.image} alt={product.name} className="object-contain h-full" />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
             <p><strong>Min Qty:</strong> {product.minQty}</p>

              <p><strong>Price:</strong> ${product.price}</p>
            <Rating name="read-only" value={product.rating} readOnly precision={0.5} className='p-0 object-cover m-0' />
              <Link  to={`/products/${product._id}`}className="btn btn-primary mt-2">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
        
      
    );
};

export default CategoryCard;