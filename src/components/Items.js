import React from 'react';
import PropTypes from 'prop-types';


function Items(props) {
    return(
        <React.Fragment>
            
            <h3>{props.month}</h3>
             {props.selection.map((item, index) =>
             <p key={index}>{item}</p>) }
        </React.Fragment>
    )
}


Items.prototype = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.string.isRequired
}

export default Items;