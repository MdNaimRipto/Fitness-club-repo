import React from 'react';
import "./Break.css"



const Break = (props) => {
    const { breakTime } = props.br;
    return (
        <div className='break-time'>
            <p>{breakTime}s</p>
        </div>
    );
};

export default Break;