import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <ul class="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    );
};

export default Header;