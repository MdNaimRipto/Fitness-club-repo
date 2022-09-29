import React from 'react';
import PersonInfo from './PersonInfo/PersonInfo';
import ExerciseDetails from "./Exercise-details/ExerciseDetails"
import Break from './Break/Break';
import "./Information.css"

const Information = (props) => {
    const { exerciseTime } = props
    return (
        <div className='information-container'>
            <PersonInfo></PersonInfo>
            <Break></Break>
            <ExerciseDetails exerciseTime={exerciseTime}></ExerciseDetails>
        </div>
    );
};

export default Information;