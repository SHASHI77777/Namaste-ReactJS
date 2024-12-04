import React from "react";
import ReactDOM from "react";
import { createRoot } from "react-dom/client";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} 
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;