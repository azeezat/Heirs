import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './Button.scss'

const renderColour=(colour)=>{
    switch (colour.toString().toLowerCase()) {
        case 'green':
            return 'green-btn'
        case 'transparent':
            return 'transparent-btn'
        case 'dark blue':
            return 'dark-blue-btn'
        default:
            break;
    }
}

const Button = ({text,colour, to}) => {
    return (
        <NavLink to={`${to?to:'/'}`}>
            <input type="button" className={`buttons ${renderColour(colour)}` } value={text}/>
        </NavLink>
    );
};

Button.propTypes = {
    colour: PropTypes.oneOf(['green', 'transparent','dark blue']),
    text: PropTypes.string.isRequired
};

export default Button;