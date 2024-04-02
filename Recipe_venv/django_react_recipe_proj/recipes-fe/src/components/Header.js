import React, { Component } from "react";
import logo from '../Imgs/Mi_Recipe.jpg'

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={logo} alt="logo"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>built with</i>
        </h5>
        <h1>React + Django</h1>
      </div>
    );
  }
}

export default Header;