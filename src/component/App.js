import React, { Component } from 'react';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home/>
        </header>
      </div>
    );
  }
}

export default App;
