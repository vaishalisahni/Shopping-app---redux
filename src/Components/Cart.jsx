import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const getCartTotal = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

function Cart({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(getCartTotal);

  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col transform transition-transform duration-500 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 shadow-lg">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🛒</div>
            <p className="text-gray-500 mb-2">Your cart is empty.</p>
            <p className="text-sm text-gray-400">
              Add some essential items to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="border-t p-4 bg-white">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Summary</h3>
            <div className="flex justify-between items-center mb-4">
              <span>Total:</span>
              <span className="font-bold text-lg">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>
            <button className="font-bold w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
