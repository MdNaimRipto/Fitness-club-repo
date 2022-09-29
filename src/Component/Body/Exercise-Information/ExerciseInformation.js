import React, { useEffect, useState } from 'react';
import Exercise from './Exercise/Exercise';
import Information from './Information/Information';
import "./ExerciseInformation.css"

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    const handleExerciseTime = (time) => {
        const newTime = [...exerciseTime, time]
        setExerciseTime(newTime);
    }
    return (
        <div>
            <h2>Select Today's Exercise...</h2>
            <div className='exercise-information'>
                <div className='exercise-container'>
                    {
                        exercises.map(exercise =>
                            <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                handleExerciseTime={handleExerciseTime}
                            ></Exercise>)
                    }
                </div>
                <div>
                    <Information exerciseTime={exerciseTime}></Information>
                </div>
            </div>
        </div>
    );
};

export default ExerciseList;