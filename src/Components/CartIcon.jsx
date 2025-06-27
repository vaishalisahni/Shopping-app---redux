import { useSelector } from 'react-redux';

const getCartItemsCount = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

function CartIcon({ onClick }) {
  const cartItemsCount = useSelector(getCartItemsCount);
  
  return (
    <button
      onClick={onClick}
      className="relative p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    >
      <span className="text-lg">🛒</span>
      {cartItemsCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold hover:bg-pink-600 transition-colors">
          {cartItemsCount}
        </span>
      )}
    </button>
  );
}
export default CartIcon;