import React from 'react';
import { useNavigate } from 'react-router';

const MyProductsCard = ({product}) => {
     const navigate=useNavigate()
    return (
       <div className="w-11/12 mx-auto card bg-base-100 border-2 border-orange-400 shadow-md p-4">
      <figure>
        <img src={product.image} alt={product.productName} className="h-40 object-cover" />
      </figure>
      <div className="card-body ">
        <h2 className="text-xl font-bold">{product.productName}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Quantity:</strong> {product.available}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p className="text-xs text-gray-500">From: {product.source}</p>
        <div className="mt-3">
         <button
                  className="btn btn-sm btn-primary"
                  onClick={() => navigate(`/updateProduct/${product._id}?source=${product.source}`)}
                >
                  Update
                </button>
        </div>
      </div>
    </div>
    );
};

export default MyProductsCard;