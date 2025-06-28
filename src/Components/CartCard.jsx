import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQty,
  decrementQty
} from '../features/Cart/cartSlice';
import {
  increaseQuantity,
  reduceQuantity
} from '../features/Products/productsSlice';

function CartCard({ item }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const currentProduct = products.find((p) => p.id === item.id);
  const isOutOfStock = !currentProduct || currentProduct.quantity < 1;

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    dispatch(increaseQuantity({ id: item.id, qty: item.quantity }));
  };

  const handleIncrement = () => {
    if (!isOutOfStock) {
      dispatch(incrementQty(item.id));
      dispatch(reduceQuantity(item.id));
    }
  };

  const handleDecrement = () => {
    if (item.quantity === 1) {
      handleRemove();
    } else {
      dispatch(decrementQty(item.id));
      dispatch(increaseQuantity({ id: item.id, qty: 1 }));
    }
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
          onClick={handleDecrement}
          className="w-8 h-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-gray-600 hover:text-pink-600 font-bold"
        >
          −
        </button>
        <span className="font-semibold text-lg min-w-[2rem] text-center">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrement}
          disabled={isOutOfStock}
          className={`w-8 h-8 rounded-full shadow-md transition-shadow duration-200 flex items-center justify-center font-bold ${
            isOutOfStock
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-gray-600 hover:text-pink-600 hover:shadow-lg'
          }`}
        >
          +
        </button>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500 ml-6 text-lg hover:text-red-700 transition-colors duration-200 hover:scale-110"
      >
        ❌
      </button>
    </div>
  );
}

export default CartCard;
