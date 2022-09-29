import React from 'react';
import "./ExerciseDetails.css"

const ExerciseDetails = (props) => {
    const { exerciseTime } = props;
    console.log(exerciseTime);
    const time = exerciseTime.reduce((p, c) => p + c.time, 0)
    return (
        <div className="exercise-details">
            <h3>Exercise Details</h3>
            <div className='time'>
                <p>Exercise Time: {time} second</p>
                <p>Break Time: 0 second</p>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;