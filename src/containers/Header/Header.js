import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.css'

import Hamburger from 'components/Hamburger/Hamburger'
import Logo from '../../components/Logo/Logo'


class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            isBurgerClicked: false
        }
    }

    _toggleHamburger() {

        this.setState({
            isBurgerClicked: !this.state.isBurgerClicked
        })
    }


    render() {

        const { isBurgerClicked } = this.state

        return (
            <div>
                <div className="header">
                    <div className="logo-container">
                        <Logo
                            subtitle={`진아야공부하자`}
                        />
                    </div>

                    <div className="burger-container">
                        <Hamburger
                            toggleHamburger={this._toggleHamburger.bind(this)}
                            isBurgerClicked={isBurgerClicked}
                        />
                    </div>
                </div>

                <div className={`nav ${isBurgerClicked ? 'active' : ''}`}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Study</span>
                    <span>Contact</span>
                </div>

            </div>
        )
    }
}

Header.propTypes = {

}

export default Header;