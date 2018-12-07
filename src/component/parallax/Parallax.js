import React from 'react';
import PropTypes from 'prop-types';
import './Parallax.css';

const Parallax = props => {
    return (
        <div className="parallax">
            <div className="parallax__image">
                <div className="parallax__text">
                    <span> Hello World! </span>
                </div>
            </div>
        </div>
    );
};

Parallax.propTypes = {
    
};

export default Parallax;