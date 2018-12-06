import React, { Component } from 'react';

import About from './about/About'
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home/>
          <About />
          <Portfolio />
          <Contact />

      </div>
    );
  }
}

export default App;
