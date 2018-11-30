import React, { Component } from 'react';

import About from './about/About'
import Home from './home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home/>
          <About />
        </header>

      </div>
    );
  }
}

export default App;
