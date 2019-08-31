import React from 'react';
import './Socials.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socials = () => {
    return (
        <div className='social-media'>
            <span>
                <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" color="gray"/>
            </span>
            <span>
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" color="gray"/>
            </span>
            <span>
                <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" color="gray"/>
            </span>
        </div>
    );
};

export default Socials;