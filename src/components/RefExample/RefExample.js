import React, { Component } from 'react';

class RefExample extends Component {
  chooseImage = () => {
    this._imageInput.click();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.chooseImage}
        >
          { `Choose image` }
        </button>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={(reference) => this._imageInput = reference}
        />
      </div>
    )
  }
}

export default RefExample;
