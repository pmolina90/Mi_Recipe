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
          width="300"
          className="logo"
        />
        <div className="footer">
          <hr />
          <div className="footer-content">
            <h5>
              <i>built with</i>
            </h5>
            <h1>React + Django</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;