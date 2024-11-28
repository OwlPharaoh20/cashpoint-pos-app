// File: /src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // User slice for authentication and profile state
import productReducer from './slices/productSlice'; // Product slice for inventory and product-related state

/**
 * Create a Redux store with slices for user and product management.
 * Additional slices can be added here as the application grows.
 */
const store = configureStore({
  reducer: {
    user: userReducer, // Handles user-related state (e.g., authentication, profile)
    product: productReducer, // Handles product-related state (e.g., product list, details)
  },
});

export default store; // Export the store to be used in the application
