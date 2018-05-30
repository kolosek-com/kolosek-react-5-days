import React, { Component } from 'react';
import './Styling.css';

class Styling extends Component {

  renderObjectStyled = () => {
    // for inline styling, send an object
    // keys are camelCased css properties
    return (
      <div style={{
        margin: 10,
        width: 80,
        height: 30,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
      }}>
        <p style={{
          color: 'white',
          textAlign: 'center',
        }}>
          JSX Styled
        </p>
      </div>
    );
  }

  renderCssStyled = () => {
    // for css styling, webpack loader is used
    // specify a class by sending a className prop
    return (
      <div className="container-div-css">
        <p className="container-p-css">
          CSS Styled
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          this.renderObjectStyled()
        }
        {
          this.renderCssStyled()
        }
      </div>
    )
  }
}

export default Styling;
