import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleChange = (val) => {
    this.setState({ userInput: val });
  };

  render() {
    return (
      <div className="searchBar">
        <input onChange={(e) => this.handleChange(e.target.value)} />

        <button>Search</button>
        <button>Clear Search</button>
      </div>
    );
  }
}

export default SearchBar;
