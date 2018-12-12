import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
    console.log('!!', props)
    return (
        <div>
            Home {props.test}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;