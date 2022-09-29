import ExerciseList from './Exercise-list/ExerciseList';
import React from 'react';
import Information from './Informations/Information';
import "./Body.css"

const Body = () => {
    return (
        <div className='body-container'>
            <ExerciseList></ExerciseList>
            <div style={{ position: "relative" }}>
                <Information></Information>
            </div>
        </div>
    );
};

export default Body;
