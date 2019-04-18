import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./app.scss";

export class App extends Component {
  render() {
    return <h1>Hello Candidate</h1>;
  }
}

App.propTypes = {
  loadModel: PropTypes.func,
  model: PropTypes.object
};
