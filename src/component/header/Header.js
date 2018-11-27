import React from 'react';
import PropTypes from 'prop-types';

import './Header.css'

const Header = props => {
    const { subtitle, title } = props;
    return (
        <div className="header">
            <div className="header__title">
                { title }
            </div>
            <div className="header__underline">

            </div>
            {subtitle ? (
                <div className="header__subtitle">
                    { subtitle }
                </div>

            ): (
                ''
            )
            }
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default Header;