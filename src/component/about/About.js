import React, { Component } from 'react';

import Header from '../header/Header'

const TITLE = 'ABOUT';
const SUB_TITLE = 'SUBTITLE';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Header
                    title={TITLE}
                    subtitle={SUB_TITLE}
                />
            </div>
        );
    }
}

export default About;