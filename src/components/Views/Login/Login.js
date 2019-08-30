import React from 'react';
import LoginForm from '../LoginForm/LoginForm'
import Header from '../../common/Header/Header';
import Socials from '../../common/Socials/Socials'

import './Login.scss'

const Login = () => {
    return (
        <div className='login-page'>
            <div className='header'>
                <Header />
            </div>
            <div className="login-component">
                <LoginForm/>
            </div>
            <div className='social-media-accounts'>
                <Socials/>
            </div>
        </div>
    );
};

export default Login;