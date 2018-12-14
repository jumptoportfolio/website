import React from 'react'
import PropTypes from 'prop-types'
import 'react-fa'
import './Logo.css'

const Logo = ({ subtitle }) => {
    return (
        <div className="logo">
            <i className="fab fa-apple"></i>
            <span className="subtitle">{subtitle}</span>
        </div>
    );
};

Logo.propTypes = {
    
}

export default Logo