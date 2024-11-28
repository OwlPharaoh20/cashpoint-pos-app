import React from 'react';

const ProductTable = () => {
  const products = [
    { name: 'Apple', price: '$1', stock: 'In Stock' },
    { name: 'Banana', price: '$2', stock: 'Out of Stock' },
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <input
        type="text"
        placeholder="Search products"
        className="mb-4 w-full px-4 py-2 border rounded"
      />
      <table className="w-full border-collapse bg-white shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
