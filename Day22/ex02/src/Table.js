// src/Table.js

import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>First name</th>
          <th>Last name</th>
        </thead>
        <tbody>
          <tr>
            <td>Lary</td>
            <td>Page</td>
          </tr>
          <tr>
            <td>Ada</td>
            <td>Lovelace</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Turing</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
