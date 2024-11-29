// File: /src/services/apiClient.js

import axios from 'axios';

// Create a pre-configured Axios client for API requests
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend API base URL
  headers: {
    'Content-Type': 'application/json', // Ensure JSON data is sent and received
  },
});

/**
 * Function to log in a user.
 * @param {Object} credentials - User credentials (email and password).
 * @returns {Object} - Response data containing user details and token.
 * @throws {Error} - Error message from the server if login fails.
 */

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/users/login', credentials); // POST request to login endpoint
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'An error occurred during login'; // Throw a descriptive error
  }
};

// You can add more API request functions here, e.g., registerUser, fetchProducts, etc.

export default apiClient;
