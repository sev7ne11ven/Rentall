import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Rentall Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>  {/* Cart link with count */}
      </ul>
    </nav>
  );
};

export default Navbar;
