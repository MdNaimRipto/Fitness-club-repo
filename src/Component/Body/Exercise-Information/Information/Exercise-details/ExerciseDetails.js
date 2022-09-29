import React from 'react';
import "./ExerciseDetails.css"

const ExerciseDetails = (props) => {
    const { exerciseTime, breakTime } = props;
    let brTime = 0;
    for (const br of breakTime) {
        brTime = br.breakTime;
    }
    const time = exerciseTime.reduce((p, c) => p + c.time, 0);
    return (
        <div className="exercise-details">
            <h3>Exercise Details</h3>
            <div className='time'>
                <p>Exercise Time: {time} second</p>
                <p>Break Time: {brTime} second</p>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;