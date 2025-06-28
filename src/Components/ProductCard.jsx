import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQty, decrementQty } from '../features/Cart/cartSlice';
import { increaseQuantity, reduceQuantity } from '../features/Products/productsSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const currentProduct = products.find(p => p.id === product.id);
  const cartProduct = cartItems.find(item => item.id === product.id);

  const isOutOfStock = !currentProduct || currentProduct.quantity < 1;
  const cartQty = cartProduct ? cartProduct.quantity : 0;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      dispatch(addToCart(product));
      dispatch(reduceQuantity(product.id));
    }
  };

  const handleIncrement = () => {
    if (!isOutOfStock) {
      dispatch(incrementQty(product.id));
      dispatch(reduceQuantity(product.id));
    }
  };

  const handleDecrement = () => {
    dispatch(decrementQty(product.id));
    dispatch(increaseQuantity({ id: product.id, qty: 1 }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center transform hover:scale-105">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-48 h-48 object-cover mb-6 rounded-xl transition-transform duration-300 hover:scale-110"
      />

      <h3 className="font-semibold text-gray-800 mb-2 text-center">{product.name}</h3>
      <p className="text-lg font-bold text-pink-600 mb-4 text-center">₹{product.price}</p>

      {cartQty > 0 ? (
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecrement}
            className="w-8 h-8 bg-gray-200 rounded-full text-xl font-semibold hover:bg-gray-300"
          >
            −
          </button>
          <span className="font-semibold">{cartQty}</span>
          <button
            onClick={handleIncrement}
            disabled={isOutOfStock}
            className={`w-8 h-8 rounded-full text-xl font-semibold ${
              isOutOfStock
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            }`}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            isOutOfStock
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`}
        >
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      )}
    </div>
  );
}

export default ProductCard;
