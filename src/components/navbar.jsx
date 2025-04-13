import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import peerSupportLogo from "../assets/peer-support-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" tabIndex="-1">
        <img 
          src={peerSupportLogo} 
          alt="Peer Support Logo" 
          className="logo-img"
        />
      </Link>
      
      <ul className="nav-links">
        <li><NavLink to="/mentalhealthresources" style={({isActive}) => isActive ? {color: '#50C878'} : {}}>Resources</NavLink></li>
        <li><NavLink to="/testimonials" style={({isActive}) => isActive ? {color: '#50C878'} : {}}>Testimonials</NavLink></li>
        <li><NavLink to="/getinvolved" style={({isActive}) => isActive ? {color: '#50C878'} : {}}>Get Involved</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;