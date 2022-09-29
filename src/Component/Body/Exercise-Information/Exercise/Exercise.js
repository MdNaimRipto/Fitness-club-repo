import React from 'react';
import "./Exercise.css"

const Exercise = (props) => {
    const { exercise, handleExerciseTime } = props;
    const { img, name, age, time } = exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <p><small>For Age: {age}</small></p>
                <p><small>Time Required: {time}s</small></p>
            </div>
            <button onClick={() => { handleExerciseTime(exercise) }} className='add-btn'>Add to List</button>
        </div>
    );
};

export default Exercise;