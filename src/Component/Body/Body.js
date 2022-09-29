import ExerciseList from './Exercise-list/ExerciseList';
import React from 'react';
import Information from './Informations/Information';
import "./Body.css"

const Body = () => {
    return (
        <div className='body-container'>
            <ExerciseList></ExerciseList>
            <Information></Information>
        </div>
    );
};

export default Body;
