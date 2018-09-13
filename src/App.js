import React, { Component } from "react";
import "./App.css";

import DataTable from "./FilterableProductTable/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <DataTable />
      </React.Fragment>
    );
  }
}

export default App;
