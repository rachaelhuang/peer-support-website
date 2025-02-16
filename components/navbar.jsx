import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1 className="logo">Dartmouth Peer Support</h1> */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/getinvolved">Get Involved</Link></li>
        <li><Link to="/mentalhealthresources">Mental Health Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;