import React from 'react';
import Header from "../components/Header";
import ProductTable from '../components/ProductTable';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProductTable />
    </div>
  );
};

export default ProductsPage;
