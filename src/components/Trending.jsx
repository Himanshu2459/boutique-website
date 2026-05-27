import React from 'react';
import ProductCard from './ProductCard';

const Trending = () => {
  const products = [
    {
      id: 1,
      image: '/product_suit_1.png',
      title: 'Pastel Digital Print 3-Piece Suit',
      price: '₹ 4,500',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      image: '/product_coord_1.png',
      title: 'Hakoba Chikankari Co-ord Set',
      price: '₹ 3,200',
      sizes: ['XS', 'S', 'M', 'L']
    }
  ];

  return (
    <section className="section container" id="new-arrivals">
      <div className="text-center fade-in">
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Trending Now</h2>
        <p style={{color: 'var(--text-secondary)', marginBottom: '3rem'}}>
          Explore our most coveted styles, loved by our community.
        </p>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
