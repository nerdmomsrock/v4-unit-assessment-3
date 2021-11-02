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

  handleClick = (input) => {
    this.props.filterBooks(input);
  };

  handleClear = () => {
    this.setState({ input: "" });
    this.props.reset();
  };

  render() {
    return (
      <div className="searchBar">
        <input
          onChange={(e) => this.handleChange(e.target.value)}
          value={this.state.input}
        />

        <button onClick={this.handleClick}>Search</button>
        <button onClick={this.handleClear}>Clear Search</button>
      </div>
    );
  }
}

export default SearchBar;
