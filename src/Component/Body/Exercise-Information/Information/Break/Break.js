import React from 'react';
import "./Break.css"



const Break = (props) => {
    const { br, handleBreakTime } = props;
    const { breakTime } = br;
    return (
        <div className='break-time'>
            <p onClick={() => { handleBreakTime(br) }}>{breakTime}s</p>
        </div>
    );
};

export default Break;