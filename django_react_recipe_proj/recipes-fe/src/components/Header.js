import React, { Component } from "react";
import logo from '../Imgs/Mi_Recipe.jpg';
import './Header.css'; // Import CSS file for styling

class Header extends Component {
  render() {
    return (
      <div className="header-container text-center">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
      </div>
    );
  }
}

export default Header;