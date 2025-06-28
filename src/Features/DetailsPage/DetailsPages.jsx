
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import ModalPage from './ModalPage';
import Rating from '@mui/material/Rating';
import { Helmet } from 'react-helmet-async';

const DetailsPages = () => {
  const product = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate()
  const {
    image,
    productName,
    brand,
    category,
    minQty,
    description,
    price,
    rating,
    available
  } = product;

  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4">
           <Helmet>
              <title>Details-Product|Brimmart  </title>
            </Helmet>
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="lg:w-1/2 bg-gray-100 flex justify-center items-center p-6">
          <img
            src={image}
            alt={productName}
            className="max-h-80 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 p-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{productName}</h1>
          <p className="text-gray-600 text-sm">{description}</p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <p><span className="font-semibold">Brand:</span> {brand}</p>
            <p><span className="font-semibold">Category:</span> {category}</p>

            <p><span className="font-semibold">Available Products:{available}</span> </p>
            <p><span className="font-semibold">Min Order:</span> {minQty}</p>
            <p><span className="font-semibold">Price:</span> ${price}</p>
          </div>

          {/* Rating */}
          <div className="mt-2">
            <Rating value={rating} readOnly precision={0.5} />
            <span className="ml-2 text-sm text-gray-500">({rating} stars)</span>
          </div>
          <div className='flex  gap-3'>
             <button
                  className="btn  btn-primary py-2 text-white text-lg rounded-xl shadow hover:scale-105 transition duration-300"
                  onClick={() => navigate(`/updateProduct/${product._id}?source=${product.source}`)}
                >
                  Update
            </button>

          <button
            className="btn btn-accent   py-2 text-white text-lg rounded-xl shadow hover:scale-105 transition duration-300"
            onClick={() => setShowModal(true)}
          >
            Buy Now
          </button>
          </div>

        </div>
      </div>

      {showModal && <ModalPage product={product} closeModal={closeModal} />}
    </div>
  );
};

export default DetailsPages;
