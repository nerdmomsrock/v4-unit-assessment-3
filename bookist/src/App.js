import React, { Component } from "react";
import Header from "./Components/Header";
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
      shelf: [],
    };
  }

  addToShelf = (book) => {
    const shelf = this.shelf.push(book.title);
    this.setState({ shelf: shelf });
  };

  clearShelf = () => {
    const emptyShelf = [];
    emptyShelf.length = 0;
    this.setState({ shelf: emptyShelf });
  };

  filterBooks = (input) => {
    let searchedBooks = [...this.state.books];
    let filteredBooks = [];
    for (let key in searchedBooks) {
      if (searchedBooks[key].title.includes(input)) {
        filteredBooks.push(searchedBooks[key]);
      }
    }
    this.setState({ books: filteredBooks });
  };

  reset = () => {
    this.setState({ books: data });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Booklist books={this.state.books} addToShelf={this.addToShelf} />
        <Shelf mappedTitles={this.state.shelf} clearShelf={this.clearShelf} />
        <SearchBar filterBooks={this.filterBooks} />
        {/* <Header />

        <SearchBar />
        <div className="main">
          <div className="books">
            <Shelf />
          </div>
          <div className="display">
            <Booklist />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
