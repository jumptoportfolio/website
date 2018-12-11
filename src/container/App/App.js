import React, { Component } from 'react';

import { print } from 'Util/console'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }

  }

  _onClick() {
    print('zz')
  }

  render() {
    return(
      <div onClick={this._onClick}>
        버전2
      </div>
    )
  }
}

export default App;
