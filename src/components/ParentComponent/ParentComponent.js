import React, { Component } from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';

// Our parent component renders the child (checkbox)
// It keeps info on value of the checkbox and updates it
class ParentComponent extends Component {
  // Default values in state are defined in constructor
  constructor() {
    super();
    this.state = {
      checkboxValue: false,
    };
  }

  // If written as an arrow function, we don't have to explicitly bind it
  handleChange = () => {
    // This is functional setState
    // Because state is asynchronous, this is the best way to update state
    // based on its previous state
    this.setState((prevState, currentProps) => {
      return {
        checkboxValue: !prevState.checkboxValue,
      }
    });
  }

  render() {
    return (
      <div>
        <ChildComponent
          checked={this.state.checkboxValue}
          label={"Labela"}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ParentComponent;
