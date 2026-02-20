import React from "react";
import "./ProductCard.css";
import offerImg from "../assets/Scroll_Additional_.jpg"; // adjust filename if different

export default function ProductCard({ product, addToCart = () => {} }) {
  // If product prop provided, render product card
  if (product) {
    const { title, price, image, description } = product;
    return (
      <article className="product-card">
        {image && <img src={image} alt={title} className="product-image" />}
        <div className="product-body">
          <h3 className="product-title">{title}</h3>
          {description && <p className="product-desc">{description}</p>}
          <div className="product-row">
            <strong className="product-price">₹{price}</strong>
            <button
              className="product-btn"
              onClick={() => addToCart(product)}
              type="button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
    );
  }

  // Fallback: promo card (original content)
  return (
    <div className="product">
    <div className="promo-card">
      <img src={offerImg} alt="Offer" className="promo-image" />
      <div className="promo-content">
        <h3>Duty Free – Pre Order Discount</h3>
        <p>Pre Order Discount and Deals on Duty Free Products.</p>
        <a href="#" className="know-more" onClick={(e) => e.preventDefault()}>
          Know More
        </a>
      </div>
    </div>
    <div className="promo-card">
      <img src={offerImg} alt="Offer" className="promo-image" />
      <div className="promo-content">
        <h3>Duty Free – Pre Order Discount</h3>
        <p>Pre Order Discount and Deals on Duty Free Products.</p>
        <a href="#" className="know-more" onClick={(e) => e.preventDefault()}>
          Know More
        </a>
      </div>
    </div>
    <div className="promo-card">
      <img src={offerImg} alt="Offer" className="promo-image" />
      <div className="promo-content">
        <h3>Duty Free – Pre Order Discount</h3>
        <p>Pre Order Discount and Deals on Duty Free Products.</p>
        <a href="#" className="know-more" onClick={(e) => e.preventDefault()}>
          Know More
        </a>
      </div>
    </div>
    </div>
  );
}
