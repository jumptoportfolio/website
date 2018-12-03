import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

import Header from '../header/Header'


const TITLE = 'ABOUT';
const SUB_TITLE = 'This is subtitle';

const Portfolio = props => {
    return (
        <div className="portfolio">
            <Header
                title={TITLE}
                subtitle={SUB_TITLE}
            />
            <div className="portfolio__projects">
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
                <div className="portfolio__project">
                    <img src={process.env.PUBLIC_URL + '/images/project_1.jpg'} />
                </div>
            </div>
        </div>
    );
};

Portfolio.defaultProps = {

};

Portfolio.propTypes = {

};

export default Portfolio;