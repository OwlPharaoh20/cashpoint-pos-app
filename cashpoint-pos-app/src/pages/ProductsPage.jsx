// File: /src/pages/ProductsPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from '../redux/slices/productSlice';
import Header from "../components/Header";
import ProductTable from '../components/ProductTable';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <ProductTable products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;