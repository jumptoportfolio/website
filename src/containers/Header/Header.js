import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.css'

import Hamburger from 'components/Hamburger/Hamburger'

const Header = props => {
    return (
        <div className="header">
            <Hamburger />
        </div>
    )
}

Header.propTypes = {
    
}

export default Header;