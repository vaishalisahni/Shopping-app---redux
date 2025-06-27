import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: products
  },
  reducers: {
    reduceQuantity: (state, action) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    }
  }
});

export const { reduceQuantity, increaseQuantity } = productSlice.actions;
export default productSlice.reducer;
