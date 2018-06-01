import React, { Component } from 'react';
import RenderContext from './components/ContextExample/ContextExample';
import FragmentExample from './components/FragmentExample/FragmentExample';
import PortalExample from './components/PortalExample/PortalExample';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toRender: 'fragment',
    };
  }

  toggleFragment = () => {
    this.setState((previousState) => {
      if (previousState.toRender === 'fragment') {
        return {
          toRender: 'portal',
        };
      } else {
        return {
          toRender: 'fragment',
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <RenderContext.Provider value={this.state.toRender}>
          <Toolbar changeFragment={this.toggleFragment} />
          <FragmentExample />
          <PortalExample />
        </RenderContext.Provider>
      </div>
    );
  }
}

export default App;
