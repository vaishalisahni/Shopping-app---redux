import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty, clearCart } from '../features/Cart/cartSlice';

function CartCard({ item }) {
   const dispatch = useDispatch();

   const handleRemove = () => {
      dispatch(removeFromCart(item.id));
   };

   const handleIncrement = () => {
      dispatch(incrementQty(item.id));
   };

   const handleDecrement = () => {
      dispatch(decrementQty(item.id));
   };

   return (
    <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg shadow-sm"
      />
      <div className="flex-1 px-6">
        <h4 className="font-semibold text-gray-800 mb-1">{item.name}</h4>
        <p className="text-lg font-bold text-pink-600">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-3">
        <button 
        className="w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-gray-600 hover:text-pink-600 font-bold"
        onClick={handleDecrement}
        >
          -
        </button>
        <span className="font-semibold text-lg min-w-[2rem] text-center">{item.quantity}</span>
        <button 
        className="w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-gray-600 hover:text-pink-600 font-bold"
        onClick={handleIncrement}>
          +
        </button>
      </div>
      <button 
      className="text-red-500 ml-6 text-lg hover:text-red-700 transition-colors duration-200 hover:scale-110"
      onClick={handleRemove}
      >
        ❌
      </button>
    </div>
  );
}

export default CartCard;
