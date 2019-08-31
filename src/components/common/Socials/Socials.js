import React from 'react';
import './Socials.scss'

const Socials = () => {
    return (
        <div className='social-media'>
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