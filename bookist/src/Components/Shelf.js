import React, { Component } from "react";

class Shelf extends Component {
  showShelf = () => {
    const mappedShelf = this.props.mappedTitles.map((shelf, i) => {
      <ul key={i} className="list">
        <li>{shelf}</li>
      </ul>;
    });
    return mappedShelf;
  };

  render() {
    return (
      <div className="shelf">
        {this.showShelf()}
        <h2>shelf</h2>
        <button onClick={this.props.clearShelf}>Clear Shelf</button>
        {/* <div className="shelfDisplay">Shelf</div> */}
      </div>
    );
  }
}

export default Shelf;
