import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import api from '../../Api/axios';
import toast from 'react-hot-toast';
import Loader from '../../Loader/Loader';
import { Helmet } from 'react-helmet-async';

const CartItem = () => {
      const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
 

   
  useEffect(() => {
    if (user?.email) {
      api.get(`/cart`, { params: { email: user.email } })
        .then(res => {
          setCartItems(res.data);
          setLoading(false);
        })
        .catch(err => {
          toast.error("Failed to load cart");
          setLoading(false);
        });
    }
  }, [user]);
  // increase data 
  const handleIncrease=async(item)=>{
    const newQty=item.buyingQuantity+1
   try {
   
   const patchRes = await api.patch(`/buy-product/${item.productId}`, { quantity: 1 });


    if (!patchRes.data.success) {
      toast.error("Not enough quantity in stock");
      return;
    }

    
   
   await api.patch(`/cart/${item._id}`, { newQuantity: newQty });

  
    setCartItems(prev =>
      prev.map(ci => ci._id === item._id ? { ...ci, buyingQuantity: newQty } : ci)
    );

    toast.success("Quantity increased");
  } catch (error) {
    toast.error("Failed to increase quantity");
  }
};

  

  const handleRemove = async (id) => {
    const confirm = window.confirm("Are you sure you want to remove this item?");
    if (!confirm) return;

    try {
      const res = await api.delete(`/cart/${id}`);
      if (res.data.success) {
        toast.success("Removed from cart & product quantity updated");
        setCartItems(prev => prev.filter(item => item._id !== id));
      } else {
        toast.error(res.data.message || "Failed to remove item");
      }
    } catch (error) {
      toast.error("Error removing item");
    }
  };


  if (loading) return <Loader></Loader>;
    return (
           <div className="max-w-6xl mx-auto p-4">
                 <Helmet>
                    <title>Cart|Brimmart  </title>
                </Helmet>
      <h2 className="text-4xl text-center font-bold mb-6">🛒 My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-base-content/70">No items in your cart.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map(item => (
            <div key={item._id} className="card shadow-md p-4 rounded-xl 	bg-base-100">
              <img src={item.
              productImage} alt={item.productName} className="w-[300px] h-[250px] object-cover rounded-3xl py-2" />
              <h3 className="text-lg font-semibold mt-2">{item.productName}</h3>
              <p className="text-sm">Category: {item.category}</p>
              <p className="text-sm">Brand: {item.brand}</p>
              <p className="text-sm">Description: {item.description}</p>
              <p className="text-sm">Buying Quantity: {item.buyingQuantity} <span><button type="button" className="btn btn-md" onClick={() => handleIncrease(item)}>+</button></span></p>
              <p className="text-sm 	text-base-content/70">Buying Date: {item.addedAt}</p>
              <button
                onClick={() => handleRemove(item._id)}
                className="mt-3 btn btn-sm bg-red-500 text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    );
};

export default CartItem;