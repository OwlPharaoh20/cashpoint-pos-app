// File: /src/pages/SalesPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesThunk } from '../redux/slices/salesSlice';
import Header from "../components/Header";

const SalesPage = () => {
  const dispatch = useDispatch();
  const { sales, loading, error } = useSelector((state) => state.sales);

  useEffect(() => {
    dispatch(fetchSalesThunk());
  }, [dispatch]);

  return (
    <div className="p-4">
       <Header />
      <h1 className="text-2xl font-bold mb-4">Sales</h1>
      {loading && <p>Loading sales data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border border-gray-300">User</th>
              <th className="p-2 border border-gray-300">Product</th>
              <th className="p-2 border border-gray-300">Quantity</th>
              <th className="p-2 border border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-100">
                <td className="p-2 border border-gray-300">{sale.user}</td>
                <td className="p-2 border border-gray-300">{sale.product}</td>
                <td className="p-2 border border-gray-300">{sale.quantity}</td>
                <td className="p-2 border border-gray-300">{`$${sale.total}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalesPage;
