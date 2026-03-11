import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>Candles</li>
            <li>Krishna poshak</li>
            <li>Jewellery</li>
            <li>Cosmetic</li>
            
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>Contact Us</li>
            
          </ul>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Carrers</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help & Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>Track Refund Status</li>
            <li>FAQs</li>
          </ul>

          
        </div>

        

      </div>

      <hr />

      <div className="footer-bottom">
        <div className="copyright">
          ©2026 Vidyamath.com All rights reserved. 
        </div>

        <div className="social-icons">
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};
export default Footer;