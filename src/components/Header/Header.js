import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = props => {
    return (
        <div className="header">
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
        </div>
    )
}

Header.propTypes = {
    
}

export default Header;