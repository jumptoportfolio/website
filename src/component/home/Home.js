import React, { Component } from 'react';
import "./Home.css";
import { Icon } from 'react-fa';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }
    hoverOn= () => {
        this.setState({ hover: true });
    };
    hoverOff= () => {
        this.setState({ hover: false });    
    };
    render() {
        return (
            <section id="home" className="home">
            <div id="container"></div>
                <div className="home__header">
                    <div className="home-header__row">
                        <div className="home-header__title">
                            Hello, I'm 
                            <span className="home-header__title-highlight"> JA ♥ JH</span>. <br/>
                            I'm a full-stack web developer. <br/>
                        </div>
                        <button className="home-header__btn--over" 
                        onMouseOver={this.hoverOn} 
                        onMouseLeave={this.hoverOff} >
                        View my work  &nbsp;
                        {/* <Icon name="arrow-right"/> */}
                        <i className={ this.state.hover ? "fa fa-arrow-down" : "fa fa-arrow-right"} > </i>
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
