import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        <div className="footer-col">
          <h4>Discover</h4>
          <ul>
            <li>Adani One ICICI Bank Credit Cards</li>
            <li>Offer & Discount</li>
            <li>Bill Payments</li>
            <li>Blogs</li>
            <li>Domestic Flights</li>
            <li>International Flights</li>
            <li>International Airlines</li>
            <li>Travel Insurance</li>
            <li>User Journey</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Flight Booking</li>
            <li>Hotels</li>
            <li>Cab Booking</li>
            <li>Duty Free</li>
            <li>Food & Beverages</li>
            <li>Pranam Service</li>
            <li>Parking</li>
            <li>Porter</li>
            <li>Lounge</li>
            <li>Lost & Found</li>
            <li>All Services</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Airport Businesses</h4>
          <ul>
            <li>Duty Free</li>
            <li>Commercial</li>
            <li>General Aviation</li>
            <li>Tenders</li>
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

          <h4 className="mt">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Awards & Accolades</li>
            <li>CSMIA Reports</li>
            <li>Sustainability</li>
            <li>Environment Management</li>
            <li>Newsroom</li>
          </ul>
        </div>

        <div className="footer-col right-col">
          <h4>Scan to Download App</h4>

          <div className="qr-box"></div>

          <div className="store-btns">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="appstore" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg" alt="playstore" />
          </div>

          <h4 className="mt">Our Awards</h4>
          <div className="awards">
            <div className="award-item">🏆 Case Study Presentation Award, 2024</div>
            <div className="award-item">🏅 Greentech Award, 2024</div>
            <div className="award-item">🥇 DG+ Award, 2023</div>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <div className="copyright">
          ©2026 Adani One · <a href="#">Privacy Policy</a> · <a href="#">Terms & Conditions</a>
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>

    </footer>
  );
};
export default Footer;