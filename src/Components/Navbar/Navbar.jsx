import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Left - Navbar Title */}
      <div className="navbar-title">
        <h1>Astha Verma</h1>
      </div>

      {/* Center - Navbar Menu */}
      <ul className="nav-menu">
        {["home", "about", "qualification", "work", "contact"].map((item) => (
          <li key={item}>
            <a
              className="anchor-link"
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
            {menu === item && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      {/* Right - Connect Button */}
      {/* <div className="nav-connect">
        <a href="#contact" className="connect-btn">
          Connect With Me
        </a>
      </div> */}
    </div>
  );
};

export default Navbar;