import React, { useEffect, useState } from 'react';
import Exercise from './Exercise/Exercise';
import "./ExerciseList.css"

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div>
            <h2>Select Today's Exercise...</h2>
            <div className='exercise-container'>
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
                }
            </div>
        </div>
    );
};

export default ExerciseList;