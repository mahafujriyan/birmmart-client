
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../../Api/axios';
import Loader from '../../Loader/Loader';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const UpdateForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
     
     const productRes = await api.get(`/resellers/id/${id}`);

      if (!productRes.data || productRes.data.length === 0) {
        setFetchError('Product not found');
        setLoading(false);
        return;
      }
     setProduct(productRes.data);

    
      const catRes = await api.get('/categories');
      setCategories(catRes.data);
      setFetchError(null);
    } catch (error) {
      console.error(error);
      setFetchError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Basic validation
    if (
      !form.image.value.trim() ||
      !form.name.value.trim() ||
      !form.brand.value.trim() ||
      !form.category.value ||
      !form.rating.value ||
      !form.description.value.trim() ||
      !form.mainQuantity.value ||
      !form.minSellQuantity.value
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

   const updated = {
  image: form.image.value.trim(),
  productName: form.name.value.trim(),
  brand: form.brand.value.trim(),
  category: form.category.value,
  rating: parseFloat(form.rating.value),
  description: form.description.value.trim(),
  availableQuantity: parseInt(form.mainQuantity.value),
  minQty: parseInt(form.minSellQuantity.value),
};


    try {
      const res = await api.patch(`/resellers/${id}`, updated);
      if (res.data.success) {
        toast.success('Product updated successfully!');
        navigate('/allProducts');
      } else {
        toast.error('Failed to update product.');
      }
    } catch (err) {
      console.error('Update failed:', err);
      toast.error('Server error while updating.');
    }
  };

  if (loading) return <Loader />;
  if (fetchError) return <div className="text-center text-red-600">{fetchError}</div>;

  return (
    <div className="w-11/12 mx-auto max-w-4xl">
      <Helmet>
        <title>Update Product | Brimmart</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-4">Update Product</h2>
      <div className="card bg-base-100 shadow-xl p-6">
        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Image URL */}
          <input
            defaultValue={product.image}
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-bordered"
            required
          />
          {/* Preview */}
          {product.image && (
            <div className="w-40 mx-auto my-auto">
              <img src={product.image} alt={product.productName} className="rounded" />
            </div>
          )}

          <input
            defaultValue={product.productName}
            name="name"
            type="text"
            placeholder="Product Name"
            className="input input-bordered"
            required
          />
          <input
            defaultValue={product.brand}
            name="brand"
            type="text"
            placeholder="Brand Name"
            className="input input-bordered"
            required
          />
          <select
            name="category"
            defaultValue={product.category}
            className="select select-bordered"
            required
          >
            <option value="" disabled>Select Category</option>
            {categories.map(cat => (
              <option key={cat.category} value={cat.category}>{cat.category}</option>
            ))}
          </select>
          <input
            defaultValue={product.rating}
            name="rating"
            type="number"
            min={1}
            max={5}
            step="0.1"
            placeholder="Rating (1-5)"
            className="input input-bordered"
            required
          />
          <input
            defaultValue={product.available || ''}
            name="mainQuantity"
            type="number"
            placeholder="Main Quantity"
            className="input input-bordered"
            required
          />
          <input
            defaultValue={product.minQty || ''}
            name="minSellQuantity"
            type="number"
            placeholder="Minimum Selling Quantity"
            className="input input-bordered"
            required
          />
          <textarea
            defaultValue={product.description}
            name="description"
            placeholder="Short Description"
            className="textarea textarea-bordered md:col-span-2"
            required
          />
          <button type="submit" className="btn btn-primary md:col-span-2">
            Submit Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
