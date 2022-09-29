import React from 'react';
import "./Exercise.css"

const Exercise = (props) => {
    const { img, name, age, time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p><small>For Age: {age}</small></p>
            <p><small>Time Required: {time}s</small></p>
        </div>
    );
};

export default Exercise;