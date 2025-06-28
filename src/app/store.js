import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import productsReducer from "../features/Products/productsSlice";
import cartUiReducer from "../features/Cart/cartUiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    cartUi: cartUiReducer,
  },
});