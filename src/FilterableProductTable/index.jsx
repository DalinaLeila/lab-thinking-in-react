import React, { Component } from "react";
import data from "../data.json";

import Table from "./Table";
import Search from "./SearchBar";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.data,
      search: {
        query: "",
        check: false
      }
    };
    this._handleSearch = this._handleSearch.bind(this);
    this._handleCheck = this._handleCheck.bind(this);
  }

  render() {
    return (
      <div className="container">
        <h1>Product List</h1>
        <Search
          search={this.state.search.query}
          check={this.state.search.check}
          handleCheck={this._handleCheck}
          handleSearch={this._handleSearch}
        />
        <Table
          check={this.state.search.check}
          search={this.state.search.query}
          data={this.state.data}
        />
      </div>
    );
  }

  _handleSearch = e => {
    this.setState({
      search: {
        query: e.target.value,
        check: this.state.check
      }
    });
  };

  _handleCheck = e => {
    this.setState({
      search: {
        query: this.state.search.query,
        check: e.target.value
      }
    });
    console.log(this.state.search.check);
  };
}

export default index;
