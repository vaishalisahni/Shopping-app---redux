import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    incrementQty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
