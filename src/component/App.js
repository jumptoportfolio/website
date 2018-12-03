import React, { Component } from 'react';

import About from './about/About'
import Home from './home/Home';
import CONTACT from './contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home />
          <About />
          <CONTACT />
        </header>

      </div>
    );
  }
}

export default App;
