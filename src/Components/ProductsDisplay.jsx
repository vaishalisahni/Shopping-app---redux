import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

function ProductsDisplay() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="flex-1 p-8 bg-gray-50">
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsDisplay
