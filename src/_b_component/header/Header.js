import React from 'react';
import PropTypes from 'prop-types';

import './Header.css'

const Header = props => {
    const { subtitle, title, titleColor, subtitleColor } = props;
    return (
        <div className="header">
            <div 
                className="header__title"
                style={{
                    color: titleColor
                }}
            >
                { title }
            </div>
            <div 
                className="header__underline"
                style={{
                    borderColor: titleColor
                }}
            >

            </div>
            {subtitle ? (
                <div 
                    className="header__subtitle"
                    style={{
                        color: subtitleColor
                    }}
                >
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
    titleColor: PropTypes.string,
    subtitleColor: PropTypes.string,
};

Header.defaultProps = {
    title: 'TITLE',
    subtitle: 'SUB_TITLE',
    titleColor: 'black',
    subtitleColor: 'black',
}

export default Header;