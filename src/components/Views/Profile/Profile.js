import React from 'react';
import './Profile.scss'
import ProfileCard from '../../common/Card/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = () => {
    return (
        <div className='profile-page'>
            <div className='profile'>
                <div className="profile-left">
                    <div className="profile-description">
                        <ProfileCard />
                    </div>
                </div>
                <div className="profile-right">
                    <h1>Brief Profile</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
                        sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet
                        tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
                        fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum
                        fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
                        Duis nunc eros, mattis at dui ac,convallis semper risus. In adipiscing ultrices tellus,
                        in suscipit massa vehicula eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam hendrerit nisi sed.
                    </p>
                    <div className='social'>
                        <span>
                            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" color="red" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" color="red" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" color="red" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;