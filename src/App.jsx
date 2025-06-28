import { useState } from "react";
import "./App.css";
import ProductsDisplay from "./Components/ProductsDisplay";
import Cart from "./Components/Cart";
import CartIcon from "./Components/CartIcon";
import { openCart,closeCart } from "./features/Cart/cartUiSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cartUi.isCartOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="p-6 bg-white shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            🛍️ Shopping App
          </h1>
          <CartIcon onClick={() => dispatch(openCart())} />
        </div>
      </header>

      {/* Main Content - Side by Side Layout */}
      <main className="flex transition-all duration-500">
        {/* Products Display */}
        <div className={`transition-all duration-500 ${isCartOpen ? "w-2/3" : "w-full"} p-8`}>
          <ProductsDisplay />
        </div>

        {/* Slide-in Cart */}
        <Cart isOpen={isCartOpen} onClose={() => dispatch(closeCart())} />
      </main>
    </div>
  );
}

export default App;
