import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness Club</h1>
        </div>
    );
};

export default Header;