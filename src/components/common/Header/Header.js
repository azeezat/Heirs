import React from 'react';
import './Header.scss';
import Logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <ul class="navigation">
            
            <li><a href="#"><img src={Logo}/></a></li>
            <li>
                <span className='circle'></span>
                <a href="#">Message From Facilitators</a>
            </li>
        </ul>
    );
};

export default Header;