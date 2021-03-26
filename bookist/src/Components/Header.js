import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="heading">
        <h1>bookist</h1>
        <div className="grayBar"></div>
      </div>
    );
  }
}

export default Header;
