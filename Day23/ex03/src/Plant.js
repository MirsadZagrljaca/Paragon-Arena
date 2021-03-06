// src/Plant.js
import React, { Component } from "react";

class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "Flowering plant" };
  }

  changeType = () => {
    this.setState({ type: "Non flowering plant" });
  };

  render() {
    return (
      <>
        <h2>Plant type is {this.state.type}</h2>
        <button type="button" onClick={this.changeType}>
          Change type
        </button>
      </>
    );
  }
}

export default Plant;
