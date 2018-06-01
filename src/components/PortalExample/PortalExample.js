import React, { Component } from 'react';
import Modal from './Modal';
import './PortalExample.css';
import RenderContext from '../ContextExample/ContextExample';


class PortalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  handleShow = () => {
    this.setState({
      showModal: true
    });
  }

  handleHide = () => {
    this.setState({
      showModal: false
    });
  }

  renderModal() {
    if (!this.state.showModal) {
      return null;
    }
    return (
      <Modal>
        <div className="modal">
          <div>
            {
              `With a portal, we can render content into a different
              part of the DOM, as if it were any other React child.`
            }
          </div>
          <button onClick={this.handleHide}>
            {`Hide modal`}
          </button>
        </div>
      </Modal>
    )
  }

  render() {
    return (
      <RenderContext.Consumer>
      {
        toRender => {
          if (toRender === 'portal') {
            return (
              <div className="app">
                { `This div has overflow: hidden.` }
                <button onClick={this.handleShow}>
                  { `Show modal` }
                </button>
                { this.renderModal() }
              </div>
            );
          } else {
            return null;
          }
        }
      }
      </RenderContext.Consumer>
    );
  }
}

export default PortalExample;
