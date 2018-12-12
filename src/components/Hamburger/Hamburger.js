import React from 'react';
import PropTypes from 'prop-types';
import './Hamburger.css'

const Hamburger = props => {
    return (
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};


export default Hamburger;