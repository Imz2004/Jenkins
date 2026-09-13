import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, category }) => {
  return (
    <div className="card product-card">
      <div className="product-img-container">
        <img src={image} alt={title} className="product-img" />
        <div className="product-overlay">
          <button className="btn btn-primary add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
