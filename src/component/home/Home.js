import React, { Component } from 'react';
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <section id="home" className="home">
                <div className="home__header">
                    <div className="home-header__row">
                        <div className="home-header__title">
                            Hello, I'm 
                            <span className="home-header__title-highlight"> JA ♥ JH</span>. <br/>
                            I'm a full-stack web developer. <br/>
                        </div>
                        <button className="home-header__btn--over">View my work ->
                        <i class="icon-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div class="home__navi">
                    <div class="home-navi__menu--top">
                        <div class="navi-menu__title"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;

