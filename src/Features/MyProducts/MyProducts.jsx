import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import api from '../../Api/axios';
import MyProductsCard from './MyProductsCard';
import Loader from '../../Loader/Loader';
import { Helmet } from 'react-helmet-async';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
   const [loading, setLoading] = useState(true);
    const [product,setProduct]=useState([])
    useEffect(()=>{
        if(user?.email){
        api(`/resellers/${user.email}`)

        .then(res=>{
          setProduct(res.data)
          setLoading(false)
        })
         .catch(() => {
          setLoading(false); 
        });
        
    }
    else{
      setLoading(false)
    }
    },[user])

 if (!user) return null;
 if(loading) return <Loader></Loader>
    
    
    return (
            <div className='w-11/12 mx-auto'>
                   <Helmet>
                      <title>My-Product|Brimmart  </title>
                    </Helmet>
            <h2 className='text-3xl font-bold  text-center'>My Products</h2>
           {
            product.length === 0?(
              <p className="text-gray-500 text-center">No items add in your product list</p>
            ):(
                <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-5'>
             {
                product.map(data=><MyProductsCard  product={data} setProduct={setProduct} user={user} key={data._id}></MyProductsCard>)
            }
           </div>
            )
            
           }

         
        </div>
    );
};

export default MyProducts;