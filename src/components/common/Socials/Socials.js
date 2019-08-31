import React from 'react';
import './Socials.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socials = () => {
    return (
        <div className='social-media'>
            <FontAwesomeIcon icon="facebook" size="2x" inverse/>

            <button>
                <i class="fa fa-facebook" />
            </button>
            <button>
                <i class="fa fa-twitter"/>
            </button>
            <button>
                <i class="fa fa-instagram"/>
            </button>
        </div>
    );
};

export default Socials;