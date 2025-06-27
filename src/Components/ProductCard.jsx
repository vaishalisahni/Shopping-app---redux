// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/Cart/cartSlice';

// function ProductCard({ product}) {

//   const dispatch = useDispatch();
//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   }

//    return (
//     <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center transform hover:scale-105">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-48 h-48 object-cover mb-6 rounded-xl transition-transform duration-300 hover:scale-110"
//       />
//       <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center leading-tight">{product.name}</h3>
//       <p className="text-2xl font-bold text-pink-600 mb-6">₹{product.price}</p>
//       <button
//       className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl active:scale-95"
//       onClick={handleAddToCart}
//     >
//       Add to Cart
//     </button>
//   </div>
// );
// }

// export default ProductCard;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/Cart/cartSlice';
import { reduceQuantity } from '../features/Products/productsSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const currentProduct = products.find(p => p.id === product.id);

  const handleAddToCart = () => {
    if (currentProduct && currentProduct.quantity >= 1) {
      dispatch(addToCart(product));
      dispatch(reduceQuantity(product.id));
    }
  };

  const isOutOfStock = !currentProduct || currentProduct.quantity < 1;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center transform hover:scale-105">
      
        <img
        src={product.image}
        alt={product.name}
        className="w-48 h-48 object-cover mb-6 rounded-xl transition-transform duration-300 hover:scale-110"
      />
      
      <h3 className="font-semibold text-gray-800 mb-2 text-center">{product.name}</h3>
      <p className="text-lg font-bold text-pink-600 mb-4 text-center">₹{product.price}</p>

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
    </div>
  );
}

export default ProductCard;

