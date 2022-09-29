import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1 className='header'>
                <FontAwesomeIcon className='header-icon' icon={faDumbbell}></FontAwesomeIcon>
                Fitness <span>Club</span>
            </h1>
        </div>
    );
};

export default Header;