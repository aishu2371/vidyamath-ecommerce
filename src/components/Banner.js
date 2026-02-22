import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="hotdeals-section">
      <h2 className="hotdeals-title">Hot Deals</h2>

      <div className="hero-banner">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            Up to 25% off <br /> at Mumbai Duty Free.
          </h1>
          <p className="tc">T&C apply.</p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <img
            src="https://i.imgur.com/1XJY7kU.png"
            alt="products"
            className="hero-products"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;