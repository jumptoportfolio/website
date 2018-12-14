import React from 'react';
import PropTypes from 'prop-types';
import './Hamburger.css'

const Hamburger = ({ toggleHamburger, isBurgerClicked }) => {

    return (
        <div>
            {/* <Nav 
                    toggleHamburger={this.state.isClicked}
                /> */}
            <div
                onClick={
                    // this._toggleHamburger.bind(this)
                    toggleHamburger
                }
                className={`hamburger ${isBurgerClicked ? 'active' : ''}`}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

Hamburger.defaultProps = {
    isBurgerClicked: false
}

Hamburger.propTypes = {
    isBurgerClicked: PropTypes.bool
}


export default Hamburger