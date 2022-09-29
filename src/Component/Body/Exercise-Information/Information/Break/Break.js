import React from 'react';
import "./Break.css"



const Break = (props) => {
    const { br, handleBreakTime } = props;
    const { breakTime } = br;
    return (
        <div className='break-time'>
            <button onClick={() => { handleBreakTime(br) }}>{breakTime}s</button>
        </div>
    );
};

export default Break;