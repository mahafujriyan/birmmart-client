import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import api from '../../Api/axios';

const ModalPage = ({closeModal,product}) => {

      const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(product.minQty || 1);
  const [cartCount,setCartCount]=useState(0)

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleBuy = async () => {
   
  if (quantity < product.minimumOrder) {
    Swal.fire({
      icon: "warning",
      title: "Minimum Quantity Required",
      text: `You must buy at least ${product.minimumOrder} units.`,
    });

    return;
  }

 try {
   
    const { data: patchData } = await api.patch(`/buy-product/${product._id}`, { quantity });

    if (patchData.success) {
   
      const cartItem = {
        userEmail: user.email,
        productId: product._id,
        productName: product.productName,
        productImage: product.image,
        buyingQuantity: quantity,
        price: product.price,
        addedAt: new Date(),
        category:product.category,
        brand:product.brand,
        description:product.description


      };

      const { data: cartRes } = await api.post(`/cart`, cartItem);

      if (cartRes.success) {
        Swal.fire("Success", "Added to cart!", "success");
        setCartCount(prev => prev + 1);
        closeModal();
          setTimeout(() => {
      window.location.reload();
    }, 1000);
        
      } else {
        throw new Error("Cart insertion failed");
      }
    } else {
      throw new Error(patchData.message);
    }

  } catch (error) {
   
    Swal.fire("Error", error.response?.data?.message || error.message, "error");
  }
};

    return (
        <div className="modal modal-open bg-opacity-50 bg-black">
      <div className="modal-box">
        <h2 className="text-xl font-bold mb-4">Buy {product.name}</h2>
        <form className="space-y-4">
          <input className="input input-bordered w-full" value={user?.displayName} readOnly />
          <input className="input input-bordered w-full" value={user?.email} readOnly />
          <div className="flex items-center gap-3">
            <button type="button" className="btn btn-sm" onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button type="button" className="btn btn-sm" onClick={increaseQty}>+</button>
          </div>
        </form>
        <div className="modal-action">
          <button onClick={handleBuy} className="btn btn-primary">Buy</button>
          <button onClick={closeModal} className="btn btn-outline">Cancel</button>
        </div>
      </div>
    </div>
    );
};

export default ModalPage;