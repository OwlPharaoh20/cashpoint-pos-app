// File: /src/redux/slices/salesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch sales data
export const fetchSalesThunk = createAsyncThunk('sales/fetchSales', async () => {
  const response = await axios.get('http://localhost:5000/api/sales');
  return response.data;
});

const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSalesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.sales = action.payload;
      })
      .addCase(fetchSalesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default salesSlice.reducer;
