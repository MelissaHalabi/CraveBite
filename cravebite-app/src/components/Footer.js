
import React from "react";
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
            Discover delicious food from your favorite restaurants.
          </p>

        </div>

        {/* Contact Information */}
        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>📧 support@cravebite.com</p>

          <p>📞 +961 70 000 000</p>

          <p>📍 Lebanon</p>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>© 2026 CraveBite. All rights reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;

