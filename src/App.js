import React, { Component } from 'react';
import AppLayout from './components/AppLayout';
import DocumentsPage from './components/DocumentsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <DocumentsPage />
        </AppLayout>
      </div>
    );
  }
}

export default App;
