import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="hero">
      <div className="hero-right">
        <span className="discount">🎉 Limited Time Offer</span>
        <h1>
          Oxidised <br /> Jewellery
        </h1>
        <p>Elegant traditional designs crafted with authentic oxidized finishes. Premium quality at unbeatable prices!</p>

        <div className="banner-cta">
          <button className="shop-btn">Shop Now</button>
          <button className="explore-btn">Explore Collection</button>
        </div>

        <div className="banner-features">
          <div className="feature">
            <span className="feature-icon">✓</span>
            <span>100% Authentic</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✓</span>
            <span>Free Shipping</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✓</span>
            <span>7-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

