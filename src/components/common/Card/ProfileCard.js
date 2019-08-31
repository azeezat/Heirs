import React from 'react';
import './ProfileCard.scss';
import PeterAshade from '../../../assets/images/peter-ashade.jpg'

const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <div className='profile-card-top'>
                <img src={PeterAshade}/>
            </div>
            <div className='profile-card-bottom'>
                <h1>Peter Ashade</h1>
                <p>MD/CEO United Capital Investment</p>
            </div>
        </div>
    );
};

export default ProfileCard;