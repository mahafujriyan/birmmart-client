import React, { useEffect, useState } from 'react';
import api from '../../Api/axios';
import CardAnimation from './CardAnimation';
import Loader from '../../Loader/Loader';

const Cards = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
        api.get('/products')
        .then(res=>setImages(res.data))

    },[])
    return (
       <div className="my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-500">Get 30% discount from  <br /> all the product</h2>
      {images.length > 0 ? 
        <CardAnimation images={images} />
       : (
        <Loader></Loader>
      )}
    </div>
    );
};

export default Cards;