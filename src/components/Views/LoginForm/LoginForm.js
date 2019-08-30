import React from 'react';
import './LoginForm.scss'

const LoginForm = () => {
    return (
        <section>
            <div className="login-section">
                <div className="login-form">
                    <form>
                        <h5>Welcome to your</h5>
                        <h2>INDUCTION</h2>

                        <h5>Login</h5>
                        <h6>Kindly login with your convard credentials</h6>

                        <p type="Email Address">
                            <input placeholder=""/>
                        </p>
                        <p type="Password">
                            <input placeholder=""/>
                        </p>

                        <div className='desc'>Sign In here</div>
                        <button>
                            <i class="fa fa-sign-in"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default LoginForm;