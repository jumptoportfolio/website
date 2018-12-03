import React, { Component } from 'react';
import "./Contact.css";


import Header from '../header/Header';
const TITLE = 'CONTACT';
const SUB_TITLE = 'Have a question or want to work together?';



class Contact extends Component {


    render() {
        return (
            
            <div className="contact">
                <Header
                    title={TITLE}
                    subtitle={SUB_TITLE}
                />
                <div className="contact-bottom">
                    <div className="contact-bottom_forms">
                        <div className="contact-bottom_form-first">
                            <div className="contact-form__row">
                                <div className="contact-form__title">Name</div>
                                <input className="contact-form__input"></input>
                            </div>
                            <div className="contact-form__rows">
                                <div className="contact-form__title">E-mail</div>
                                <input className="contact-form__input"></input>
                            </div>
                        </div>
                        <div className="contact-bottom_form-second">
                            <textarea className="contact-form__textarea" placeholder="your message"></textarea>
                            <div className="contact-form__btn">
                                <button className="contact-form__btn--title">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-bottom__map" id="map">
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

// 2998dc18d404ad39ca0ef1963f7dad19