import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import products from "../data/products";

const PopularProducts = () => {

  return (
    <section className="popular-section">
      <div className="popular-header">
        <h2>Popular Products</h2>
        <div className="nav-buttons">
          <button className="nav-btn">‹</button>
          <button className="nav-btn">›</button>
        </div>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <Link to={`/product/${item.id}`} className="img-box" aria-label={`View details for ${item.name}`}>
              <img src={item.img} alt={item.name} />
            </Link>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>

              {item.preorder && (
                <p className="preorder">
                  Pre-order at <span>{item.preorder}</span>
                </p>
              )}

              <div className="product-actions">
                <Link to={`/product/${item.id}`} className="details-link">
                  View details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;