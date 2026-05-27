import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, sizes }) => {
  return (
    <div className="product-card fade-in">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="product-overlay">
          <button className="btn-primary" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Quick View</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
        <div className="product-sizes">
          {sizes.map(size => (
            <span key={size} className="size-badge">{size}</span>
          ))}
        </div>
        <div className="quick-actions">
          <button className="btn-outline">Add to Cart</button>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn-whatsapp" style={{justifyContent: 'center'}}>
            <i className="fab fa-whatsapp"></i> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
