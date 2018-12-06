import React, { Component } from 'react';

import About from './about/About'
import Home from './home/Home';
<<<<<<< HEAD
import CONTACT from './contact/Contact';
=======
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
>>>>>>> portfolio

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
          <Home />
          <About />
          <CONTACT />
        </header>
=======
          <Home/>
          <About />
          <Portfolio />
          <Contact />
>>>>>>> portfolio

      </div>
    );
  }
}

export default App;
