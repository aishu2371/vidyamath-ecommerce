import React from "react";
import logo from "../assets/logo (1) (1).jpg"; // adjust filename if different
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <div className="logo-section">
            <h3>Vidyamath</h3>
          </div>
          <p>
         Resources and study material to help students learn and master mathematics.
          </p>

        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>Workbooks</li>
            <li>Kits</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping &amp; Returns</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Sustainability</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vidyamath. All rights reserved.</p>
        <div className="bottom-links">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

