import React, { useState } from "react";
import "../Styles/Navbar.css";  
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">📰 NewsExplorer</div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button className="nav-btn login">Login</button>
        </li>
        <li>
          <button className="nav-btn signup">Sign Up</button>
        </li>
      </ul>

      <button className="mobile-toggle" onClick={() => setIsMobile(!isMobile)}>
        ☰
      </button>
    </nav>
  );
}

export default NavBar;
