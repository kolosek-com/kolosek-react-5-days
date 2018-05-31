import React, { Component } from 'react';
import RefExample from '../../components/RefExample/RefExample';

class ImageChooser extends Component {
  render() {
    return (
      <div>
        <p> File input field is hidden, and button is used to simulate click on it</p>
        <RefExample />
      </div>
    );
  }
}

export default ImageChooser;
