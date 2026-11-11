
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h2>
            Crave<span>Bite</span>
          </h2>

          <p>
            Your cravings, delivered.
            Discover your favorite food and enjoy every bite!
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">My Cart</Link>

        </div>

        {/* Categories */}
        <div className="footer-section">

          <h3>Food Categories</h3>

          <Link to="/restaurants?category=Burgers">Burgers</Link>
          <Link to="/restaurants?category=Pizza">Pizza</Link>
          <Link to="/restaurants?category=Sushi">Sushi</Link>
          <Link to="/restaurants?category=Lebanese">Lebanese</Link>
          <Link to="/restaurants?category=Desserts">Desserts</Link>

        </div>

        {/* Contact */}
        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>📧 support@cravebite.com</p>
          <p>📞 +961 70 000 000</p>
          <p>📍 Lebanon</p>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 CraveBite. All rights reserved.
        </p>

        <p>
          Made with ❤️ for food lovers.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
