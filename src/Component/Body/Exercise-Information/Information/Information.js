import React, { useEffect, useState } from 'react';
import PersonInfo from './PersonInfo/PersonInfo';
import ExerciseDetails from "./Exercise-details/ExerciseDetails"
import Break from './Break/Break';
import "./Information.css"
// import { addToLocal } from '../../../Utilities/LocalStorage';

const Information = (props) => {
    const { exerciseTime } = props
    const [breaks, setBreaks] = useState([]);
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() => {
        fetch("break.json")
            .then(res => res.json())
            .then(data => setBreaks(data))
    }, []);

    const handleBreakTime = (time) => {
        const newBreakTime = [...breakTime, time];
        setBreakTime(newBreakTime);
        // addToLocal(time.breakTime);
    }
    return (
        <div className='information-container'>
            <PersonInfo></PersonInfo>
            <div className='break-container'>
                <h3>Add a Break</h3>
                <div className='break-time'>
                    {
                        breaks.map(
                            br => <Break
                                key={br.id}
                                br={br}
                                handleBreakTime={handleBreakTime}></Break>)
                    }
                </div>
            </div>
            <ExerciseDetails
                exerciseTime={exerciseTime}
                breakTime={breakTime}
            ></ExerciseDetails>
        </div>
    );
};

export default Information;