import ExerciseInformation from './Exercise-Information/ExerciseInformation';
import React from 'react';
import "./Body.css"

const Body = () => {
    return (
        <div className='body-container'>
            <ExerciseInformation></ExerciseInformation>
        </div>
    );
};

export default Body;
