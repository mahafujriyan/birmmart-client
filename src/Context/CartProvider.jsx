import React, { Children, useEffect, useState } from 'react';
import api from '../Api/axios';
import { CartContext } from './CartContext';

const CartProvider = ({children}) => {
    const [cartCount,setCartCount]=useState(0)
    const[userEmail,setUserEmail]=useState(null)
    useEffect(()=>{
        const cart=async()=>{
            if(userEmail){
                 const res = await api.get(`/cart?email=${userEmail}`);
          setCartCount(res.data.length);

            }
           
        }
         cart()
    },[userEmail])
    return (
        <CartContext.Provider value={{cartCount,setCartCount,setUserEmail}}>
            {
                children
            }
        </CartContext.Provider>
    );
};

export default CartProvider;