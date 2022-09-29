import React from 'react';
import PersonInfo from './PersonInfo/PersonInfo';
import "./Information.css"
import Break from './Break/Break';

const Information = () => {
    return (
        <div className='information-container'>
            <PersonInfo></PersonInfo>
            <Break></Break>
        </div>
    );
};

export default Information;