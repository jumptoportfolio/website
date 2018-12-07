import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import 'react-fa';

const Home = ({ isTop, hambergerHandler, isHambergerCliked }) => {
    console.log('HOME IS RENDERED', isTop)

    return (
        <div className="home">
            <header className="home__header">
                <div className="home-header__logo">
                    <i className="fab fa-apple"></i>
                    <span className="subtitle">진아야공부하자</span>
                </div>
                <div className="home-header__nav">

                    <div className={`nav__menu ${isHambergerCliked ? 'active': ''}`}>
                        <span>Home</span>
                        <span>About</span>
                        <span>Portfolio</span>
                        <span>Study</span>
                        <span>Contact</span>
                    </div>
                    <div 
                        className={`nav__hamberger ${isHambergerCliked ? 'active': ''}`}
                        onClick={hambergerHandler}
                    >
                        <div className="nav__hamberger--line"></div>
                        <div className="nav__hamberger--line"></div>
                        <div className="nav__hamberger--line"></div>
                    </div>
                </div>
            </header>
            <div className="home__details">
                <div className="home-details__text">
                    Hello, I'm <span className="home-details__text--highlight">Kim Jin A</span>
                </div>
                <div className="home-details__text">
                    I'm <span className="home-details__text--underline">full-stack</span> web developer
                </div>
                {/* <div className="home-details__button">
                    View my works
                </div> */}
                <div className="home-details__arrow bounce">
                    <i className="fa fa-arrow-down"></i>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;