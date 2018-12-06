import React, { Component } from 'react';
import './Contact.css';

import Header from '../header/Header'

const TITLE = 'CONTACT'
const SUB_TITLE = 'Have a question or wanna work together?'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Header
                    title={TITLE}
                    subtitle={SUB_TITLE}
                    titleColor={'#fff'}
                    subtitleColor={'#04C2C9'}
                />

                <div className="contact-form__container">
                    <form>
                        <div className="contact-form__left">
                            <div className="contact-form__box">
                                <input type="text" required></input>
                                <label>Your name</label>
                            </div>
                            <div className="contact-form__box">
                                <input type="text" required></input>
                                <label>Your email</label>
                            </div>

                        </div>
                        <div className="contact-form__right">
                            <div className="contact-form__box">
                                <textarea type="text" required></textarea>
                                <label>Your message</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;