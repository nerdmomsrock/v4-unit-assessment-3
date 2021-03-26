import React, { Component } from "react";
import Header from "./Components/Header.js";
import "./App.css";

import data from "./Components/data";
import SearchBar from "./Components/SearchBar";
import Booklist from "./Components/Booklist";
import Shelf from "./Components/Shelf";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      titles: [],
    };
  }
  render() {
    return (
      <div className="App">
        <Header />

        <SearchBar />
        <div className="main">
          <div className="books">
            <Shelf />
          </div>
          <div className="display">
            <Booklist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
