import React from 'react';
import InductionInstructions from '../InductionInstructions/InductionInstructions'
import Header from '../../common/Header/Header';
import Socials from '../../common/Socials/Socials'

import './Induction.scss'

const Induction = () => {
    return (
        <div className='login-page'>
            <div className='header'>
                <Header />
            </div>
            <div className="login-component slidein">
                <InductionInstructions/>
            </div>
            <div className='social-media-accounts'>
                <Socials/>
            </div>
        </div>
    );
};

export default Induction;