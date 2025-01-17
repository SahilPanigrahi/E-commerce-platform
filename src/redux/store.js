import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'; // Adjust path as needed

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
