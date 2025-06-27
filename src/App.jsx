import { useState } from "react";
import "./App.css";
import ProductsDisplay from "./Components/ProductsDisplay";
import Cart from "./Components/Cart";
import CartIcon from "./Components/CartIcon";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="p-6 bg-white shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            🛍️ Shopping App
          </h1>
          <CartIcon onClick={() => setIsCartOpen(true)} />
        </div>
      </header>

      {/* Main Content - Side by Side Layout */}
      <main className="flex transition-all duration-500">
        {/* Products Display */}
        <div className={`transition-all duration-500 ${isCartOpen ? "w-2/3" : "w-full"} p-8`}>
          <ProductsDisplay />
        </div>

        {/* Slide-in Cart */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </main>
    </div>
  );
}

export default App;
