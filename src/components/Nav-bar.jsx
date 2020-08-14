import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "../styles/nav-bar.css";

const NavBar = () => {
  const menu = ["Home", "Service", "About", "Contact"];
  const item = menu.map((arr) => <li key={arr.toString()}>{arr}</li>);
  return (
    <div className="navbar">
      <nav className="nav sticky-top">
        <span id="brand">
          <a href="#Home">Explore Creative</a>
        </span>
        <ul id="menu">{item}</ul>
      </nav>
    </div>
  );
};

export default NavBar;
