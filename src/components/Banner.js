import React from "react";
import "./Banner.css";
import winterImg from "../assets/download.jpg"; // apni image yaha daalo

function Banner() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={winterImg} alt="Winter Collection" />
      </div>

      <div className="hero-right">
        <span className="discount">60% Discount</span>
        <h1>
          Oxidised <br /> Jewellery
        </h1>
        <p>Best Collection By 2026!</p>

        <button className="shop-btn">Shop Now</button>
      </div>
    </section>
  );
}

export default Banner;

