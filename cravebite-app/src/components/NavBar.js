
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        Crave<span>Bite</span>
      </h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;
