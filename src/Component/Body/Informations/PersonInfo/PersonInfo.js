import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./PersonInfo.css"

const PersonInfo = () => {
    return (
        <div className='person-container'>
            <div className='person-profile'>
                <img src="profile.jpg" alt="" />
            </div>
            <div className='person-info'>
                <h3>MD Naimur Rahman</h3>
                <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <small>Dhaka, Bangladesh</small></p>
            </div>
        </div>
    );
};

export default PersonInfo;