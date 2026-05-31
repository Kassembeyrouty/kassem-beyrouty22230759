import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link> |
        <Link to="/gallery">Gallery</Link> |
        <Link to="/services">Services</Link> |
        <Link to="/contact">Contact</Link>
      </div>
      <p>Copyright © 2026 Kassem beyrouty</p>
    </footer>
  );
}

export default Footer;