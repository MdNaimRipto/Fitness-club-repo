import React from 'react';
import "./Break.css"

const Break = () => {
    return (
        <div className='break-container'>
            <h3>Add a Break</h3>
            <div className='break-time'>
                <p>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
                <p>50s</p>
            </div>
        </div>
    );
};

export default Break;