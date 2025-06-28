import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import api from '../../Api/axios';
import Loader from '../../Loader/Loader';
import Rating from '@mui/material/Rating';
import { MdViewModule } from "react-icons/md";
import { BsTablet } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';
const AllProducts = () => {
      const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view,setView]=useState('card') 
  const [sortOrder, setSortOrder] = useState('');


  const navigate = useNavigate();
    useEffect(() => {
    api.get('/allProducts')
      .then(res => {
        setProducts(res.data);
        setLoading(false); 
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  const handleFilter=()=>{
    api.get('/allProduct/available')
    .then(res=>setProducts(res.data))
  }

  
  if(loading){
   return (
     <>
     <Loader></Loader>
     </>
    );
  }
    return (
         <div className="p-6 bg-base-100">
          <Helmet>
      <title>All Products | Brimmart</title>
      <meta name="description" content="Browse all wholesale products available on Brimmart, including electronics, fashion, gadgets, and more." />
    </Helmet>
    {/* view toggle  */}
    

          {/* card view  */}
          <div className='flex mb-2 gap-3 justify-end'>
             <button
          onClick={() => setView('card')}
          className={`px-4 py-2 rounded ${view === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <span>
          <MdViewModule />
          </span>
        </button>
             <button
          onClick={() => setView('table')}
          className={`px-4 py-2 rounded ${view === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
      <span>
          <BsTablet />
      </span>
        </button>
          </div>
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
     
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
         <button onClick={handleFilter} className="btn btn-primary mb-4 rounded-3xl  ">Available Products</button>
         <select
        value={sortOrder || ""}
        onChange={(e) => {
          const value = e.target.value;
          setSortOrder(value);
          api.get(`/allProducts?sortBy=minQty&order=${value}`).then(res => {
            setProducts(res.data);
          });
        }}
        className="select select-bordered max-w-xs w-full"
      >
        <option disabled value="">Sort by Min Quantity</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

        

 

  
       
      </div>
      {
        view==='card'?(
           <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {products.map(product => (
          <div key={product._id} className="card bg-base-100 shadow-xl">
            <figure className="h-48 ">
              <img src={product.image} alt={product.name} className="object-contain h-full" />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-sm ">{product.description}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
             <p><strong>Min Qty:</strong> {product.minQty}</p>

              <p><strong>Price:</strong> ${product.price}</p>
            <Rating name="read-only" value={product.rating} readOnly precision={0.5} className='p-0 object-cover m-0' />
              <Link  to={`/products/${product._id}`}className="btn btn-primary mt-1.5">See more</Link>
            </div>
          </div>
        ))}

      </div>
        ):
       (
        <div className='overflow-x-auto w-full'>
          <div className='min-w-[700px]'>
            <table  className="min-w-full border-collapse rounded-2xl text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-center  text-sm md:text-base">
                <th className="border p-2">Image</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Brand</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Rating</th>
                <th className="border p-2">Modify</th>
                
              </tr>

            </thead>
            {/* table body */}
            <tbody>
               
                {products.map(product => (
          <tr key={product._id}    className="hover:bg-gray-50 border-2 text-center text-xs sm:text-sm md:text-base">
            <td className='p-2'> <img src={product.image} alt={product.productName} className="h-[80px] w-[100px] sm:h-[120px] sm:w-[150px] object-cover rounded-xl mx-auto" /></td>
           
              <td className="text-xl font-bold">{product.productName}</td>
              <td><strong>Brand:</strong> {product.brand}</td>
              <td><strong>Category:</strong> {product.category}</td>
              <td><strong>Quantity:</strong> {product.minQty}</td>
               <td>
                <Rating name="read-only" value={product.rating} readOnly precision={0.5} className="scale-75 sm:scale-100"/>
               </td>
              <td className="mt-3">
               <Link  to={`/products/${product._id}`}className="btn btn-primary mt-1.5">See more</Link>
              </td>
            
          </tr>
        ))}
            </tbody>

          </table>
          </div>

        </div>
      
       )
      }

     
    </div>
    );
};

export default AllProducts;