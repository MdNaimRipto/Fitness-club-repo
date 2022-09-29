import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ExerciseDetails.css"

const ExerciseDetails = (props) => {
    const showToast = () => {
        toast("Congratulation's. You have completed your Exercise...", {
            position: "top-center"
        })
    }
    const { exerciseTime, breakTime } = props;
    let brTime = 0;
    for (const br of breakTime) {
        brTime = br.breakTime;
    }
    const time = exerciseTime.reduce((p, c) => p + c.time, 0);
    return (
        <>
            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <div className='time'>
                    <p>Exercise Time: {time} second</p>
                    <p>Break Time: {brTime || localStorage.getItem("break time")} second</p>
                </div>
                <button onClick={showToast} className='activity-btn'>Activity Completed</button>
            </div>

            <ToastContainer />
        </>
    );
};

export default ExerciseDetails;