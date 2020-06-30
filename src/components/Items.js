import React from 'react';
import PropTypes from 'prop-types';


function Items(props) {
    return(
        <React.Fragment>
            <h3>Avaliable FRUITS AND VEGGIES BRUH</h3>
            <h3>{props.month}</h3>
            <h3>{props.selection}</h3>
        </React.Fragment>
    )
}



export default Items;