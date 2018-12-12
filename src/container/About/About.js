import React, { Component } from 'react';

class About extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                {match.params.username}
            </div>
        );
    }
}

export default About;