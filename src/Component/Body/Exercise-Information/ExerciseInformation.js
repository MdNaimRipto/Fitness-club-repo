import React, { useEffect, useState } from 'react';
import Exercise from './Exercise/Exercise';
import Information from './Information/Information';
import "./ExerciseInformation.css"
import Blog from './Blog/Blog';
import { getFromLocal } from '../../Utilities/LocalStorage';

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
            <div className='exercise-information'>
                <div>
                    <h2 className='list-title'>Select Today's Exercise...</h2>
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
                </div>
                <div>
                    <Information exerciseTime={exerciseTime}></Information>
                </div>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default ExerciseList;