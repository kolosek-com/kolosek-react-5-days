import React, { Component } from 'react';

// With component defined this way, you can specify component's state
// and also override some lifecycle functions and define some new
// functions that can be used inside of this component
class StatefullComponent extends Component {
  // Whatever type of component, render should always return either
  // one (top level) HTML element or null
  // Always wrap what you return inside the parentheses ()
  render() {
    return (
      <h1>
        Welcome to react
      </h1>
    );
  }
};

export default StatefullComponent;
