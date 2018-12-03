import React, { Component } from 'react';

import About from './about/About'
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home/>
          <About />
          <Portfolio />

      </div>
    );
  }
}

export default App;
