import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h3>
            <span className="red">T</span>ravelKuy
          </h3>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
