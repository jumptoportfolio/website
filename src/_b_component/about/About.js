import React, { Component } from 'react';

// Styles
import './About.css'

// Component
import Header from '../header/Header'



const TITLE = 'ABOUT';
const SUB_TITLE = 'This is subtitle';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Header
                    title={TITLE}
                    subtitle={SUB_TITLE}
                />
                <div className="about__explain">
                    <div className="about-explain__column">
                        <div className="expain__icon">
                            <i class="fab fa-apple"></i>
                        </div>
                        <span className="explain__title">
                            Lorem junk
                        </span>
                        <div className="explain__content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </div>
                    </div>
                    <div className="about-explain__column">
                        <div className="expain__icon">
                            <i class="fab fa-apple"></i>
                        </div>
                        <span className="explain__title">
                            Lorem junk
                        </span>
                        <div className="explain__content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </div>
                    </div>
                    <div className="about-explain__column">
                        <div className="expain__icon">
                            <i class="fab fa-apple"></i>
                        </div>
                        <span className="explain__title">
                            Lorem junk
                        </span>
                        <div className="explain__content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </div>
                    </div>
                    <div className="about-explain__column">
                        <div className="expain__icon">
                            <i class="fab fa-apple"></i>
                        </div>
                        <span className="explain__title">
                            Lorem junk
                        </span>
                        <div className="explain__content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </div>
                    </div>
                </div>

                <div className="about-profile">
                    <div className="about-profile__me">
                        <div className="profile-me__img">
                            <img src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
                        </div>
                        <span className="profile-me__title">
                            Who's this guy?
                        </span>
                        <span className="profile-me__content">
                            I'm the Front-End Developer for EyeCue Lab in Portland, OR. 
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. 
                            Let's make something special.
                        </span>
                    </div>
                    <div className="about-profile__skills">
                        <div className="about-profile__skill">
                            <div className="profile-skill__bar">
                                <div className="profile-skill__title">CSS</div>
                            </div>
                            <span className="profile-skill__rate">
                                88%
                            </span>
                        </div>
                        <div className="about-profile__skill">
                            <div className="profile-skill__bar">
                                <div className="profile-skill__title">CSS</div>
                            </div>
                            <span className="profile-skill__rate">
                                88%
                            </span>
                        </div>
                        <div className="about-profile__skill">
                            <div className="profile-skill__bar">
                                <div className="profile-skill__title">CSS</div>
                            </div>
                            <span className="profile-skill__rate">
                                88%
                            </span>
                        </div>
                        <div className="about-profile__skill">
                            <div className="profile-skill__bar">
                                <div className="profile-skill__title">CSS</div>
                            </div>
                            <span className="profile-skill__rate">
                                88%
                            </span>
                        </div>
                        <div className="about-profile__skill">
                            <div className="profile-skill__bar">
                                <div className="profile-skill__title">CSS</div>
                            </div>
                            <span className="profile-skill__rate">
                                88%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;