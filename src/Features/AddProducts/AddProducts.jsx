import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import api from '../../Api/axios';
import { AuthContext } from '../../Context/AuthContext';
import { Helmet } from 'react-helmet-async';

const AddProducts = () => {
  const{user}=useContext(AuthContext)
    const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    image: '',
    productName: '',
    mainQty: '',
    minQty: '',
    brand: '',
    category: '',
    description: '',
    price: '',
    rating: '',
    content: 'This product is listed on Brimmart wholesale platform. Buyers must adhere to minimum order quantity.'
  });

  const navigate = useNavigate();
   useEffect(() => {
    api.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error('Error loading categories:', err);
        toast.error('Failed to load categories');
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async e => {
    e.preventDefault();

    const {
      image, productName, available, minQty, brand,
      category, description, price, rating
    } = product;

    if (!image || !productName || !available || !minQty || !brand ||
        !category || !description || !price || !rating) {
      toast.error('All fields are required');
      return;
    }

    const newProduct = {
      image,
      productName,
      available: parseInt(available),
      minQty: parseInt(minQty),
      brand,
      category,
      description,
        email: user.email,
      price: parseFloat(price),
      rating: parseFloat(rating),
      
      content: product.content
    };
    // post the data 
     try {
      const res = await api.post('/resellers', newProduct);
      if (res.data.success) {
        toast.success('Product added successfully');
        navigate('/'); 
      } else {
        toast.error('Failed to add product');
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error');
    }

}


    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-lg shadow-xl">
           <Helmet>
        <title>Add-Product|Brimmart  </title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* image url */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
{/* product name */}
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
{/* main quantity */}
        <input
          type="number"
          name="available"
          placeholder="Main Quantity"
          value={product.available}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
{/* min quantity */}
        <input
          type="number"
          name="minQty"
          placeholder="Minimum Selling Quantity"
          value={product.minQty}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
{/* Brand name */}
        <input
          type="text"
          name="brand"
          placeholder="Brand Name"
          value={product.brand}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
{/* category */}
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>Select Category</option>
          {categories.map(cat => (
            <option key={cat.category} value={cat.category}>{cat.category}</option>
          ))}
        </select>
{/* products description */}
        <textarea
          name="description"
          placeholder="Short Description"
          value={product.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        />
{/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price per Quantity"
          value={product.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          step="0.01"
          required
        />
{/* rating */}
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={product.rating}
          onChange={handleChange}
          className="input input-bordered w-full"
           step="0.01"
          required
        />

        <div className="bg-base-100 p-3 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">Product Content</h4>
          <p className="text-sm text-gray-600">{product.content}</p>
        </div>

        <button type="submit" className="btn btn-primary mt-4">Add Product</button>
      </form>
    </div>
    );
};

export default AddProducts;