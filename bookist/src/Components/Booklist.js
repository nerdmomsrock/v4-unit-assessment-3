import React, { Component } from "react";

class Booklist extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  showBooks = () => {
    const mappedBooks = this.props.books.map((book, i) => {
      <div key={book.id} className="coverPic">
        <div className="bookInfo">
          <button
            className="addShelf"
            onClick={() => this.props.addToShelf(book.title)}
          >
            <img scr={book.img} alt="book-cover"></img>
          </button>
        </div>
        <div className="title">
          <h3>{book.title}</h3>
          <span>{book.author}</span>
        </div>
      </div>;
    });
    return mappedBooks;
  };
  render() {
    return (
      <div className="bookList">
        {this.showBooks()}
        {/* <div className="list">List</div> */}
      </div>
    );
  }
}

export default Booklist;
