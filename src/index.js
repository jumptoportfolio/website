import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css'

import { createStore } from 'redux'
import reducer from './reducer/view'
import { 
    clickHamburger 
} from './actions'

const store = createStore(reducer)

console.log('초기상태', store.getState())

let unscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(clickHamburger())
store.dispatch(clickHamburger())
store.dispatch(clickHamburger())
store.dispatch(clickHamburger())
store.dispatch(clickHamburger())
store.dispatch(clickHamburger())


ReactDOM.render(<App />, document.getElementById('root'));


