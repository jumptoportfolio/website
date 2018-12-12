import React, { Component } from 'react'

import { print } from 'util/console'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from '../Home/Home'

import Header from '../Header/Header'


class App extends Component {
  constructor() {
    super()
    this.state = {
    }

  }

  render() {
    return(
      <Router>
        <div>
          <Header />
          <Route 
            exact 
            path="/" 
            render={() => <Home />}
          />
        </div>
      </Router>
    )
  }
}

export default App;
