import React, { Component } from 'react';

import About from './about/About';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Parallax from './parallax/Parallax';

import { getScreenDemension } from './utils/screen'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isTop: true,
      isHambergerCliked: false,
    }

    this._hambergerHandler = this._hambergerHandler.bind(this)
    this._windowScrollHander = this._windowScrollHander.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this._windowScrollHander)
  }

  _windowScrollHander() {
    const isTop = window.scrollY < getScreenDemension().height;
    if (isTop !== this.state.isTop) {
      this.setState({
        isTop
      })
    }
  }

  _hambergerHandler() {
    this.setState({
      isHambergerCliked: !this.state.isHambergerCliked
    })
  }


  render() {

    const { isTop, isHambergerCliked } = this.state
    
    return (
      <div className="App">
          <Home 
            isTop={isTop}
            isHambergerCliked={isHambergerCliked}
            hambergerHandler={this._hambergerHandler}
            />
          <About />
          <Parallax />
          <Portfolio />
          <Contact />

      </div>
    );
  }
}

export default App;
