import React from 'react';
import './Header.scss';
import Logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <ul class="navigation">
            
            <li><a href="/"><img src={Logo} alt="website logo"/></a></li>
            <li>
                <span className='circle'>
                    <button className='notification'>5</button>
                </span>
                <a href="/">Message From Facilitators</a>
            </li>
        </ul>
    );
};

export default Header;