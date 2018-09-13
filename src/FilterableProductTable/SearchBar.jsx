import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          className="bar"
          onChange={this.props.handleSearch}
          value={this.props.search.query}
          type="text"
          placeholder="search..."
        />
        <label>Only Show products in Stock</label>
        <input
          type="checkbox"
          value={this.props.search.check}
          onChange={this.props.handleCheck}
        />
      </div>
    );
  }
}

export default SearchBar;
