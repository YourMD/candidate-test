import React, { Component } from "react";
import PropTypes from "prop-types";

export class App extends Component {
  render() {
    return <h1>Hello Candidate</h1>;
  }
}

App.propTypes = {
  loadModel: PropTypes.func,
  model: PropTypes.object
};
