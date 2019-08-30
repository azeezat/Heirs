import React from 'react';
import PageInfo from '../PageInfo/PageInfo'
import Header from '../Header/Header';
import './Login.scss'

const Login = () => {
    return (
        <div className='login-page'>
            {/* <div className='header'>
                <Header />
            </div> */}
            <div className="login-component">
                <PageInfo/>
            </div>
        </div>
    );
};

export default Login;