// File: /src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';
import salesReducer from './slices/salesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    sales: salesReducer,
    // Add other reducers as needed
  },
});

export default store;