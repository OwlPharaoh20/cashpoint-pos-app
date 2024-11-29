// File: /src/api/sampleApiCalls.js
import apiClient from './apiClient';

/**
 * Fetch all users from the API
 */
export const fetchUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

/**
 * Fetch all products from the API
 */
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
};

/**
 * Create a new transaction in the database
 */
export const createTransaction = async (transactionData) => {
  try {
    const response = await apiClient.post('/transactions', transactionData);
    return response.data;
  } catch (error) {
    console.error('Error creating transaction:', error.message);
    throw error;
  }
};
