import React from 'react';
import PropTypes from 'prop-types';

function Hours (prop){
    return (
        <React.Fragment>
            
            <hr />
            <p>{prop.day}</p>
            <p>Location: {prop.location}</p>
            <p>Hours: {prop.hours}</p>
            <p>Booth: {prop.booth}</p>
            <hr />
            

        </React.Fragment>
    )
}

Hours.prototype = {
    day: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    booth: PropTypes.string.isRequired
}

export default Hours;