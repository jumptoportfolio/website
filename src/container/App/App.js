import React, { Component } from 'react'

import { print } from 'Util/console'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from '../Home/Home'

import Header from '../../components/Header/Header'


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
