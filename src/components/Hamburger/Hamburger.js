import React from 'react';
import PropTypes from 'prop-types';
import './Hamburger.css'

class Hamburger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }
    }

    _toggleHamburger() {
        this.setState(prevState => {
            return {
                isClicked: !prevState.isClicked
            }
        })
    }

    render() {
        console.log(this.state.isClicked)
        return (
            <div 
                onClick={this._toggleHamburger.bind(this)}
                className={`hamburger ${this.state.isClicked ? 'active' : ''}`}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        )
    }
}


export default Hamburger;