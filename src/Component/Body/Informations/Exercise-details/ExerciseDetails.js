import React from 'react';
import "./ExerciseDetails.css"

const ExerciseDetails = () => {
    return (
        <div className="exercise-details">
            <h3>Exercise Details</h3>
            <div className='time'>
                <p>Exercise Time: 0 second</p>
                <p>Break Time: 0 second</p>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;