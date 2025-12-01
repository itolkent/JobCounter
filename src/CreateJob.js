import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

const JobCounter = () => {
    let [jobCount, setJobCounter] = useState(0)

    const handleAddEvent = () => {
        setJobCounter(jobCount + 1)
        console.log('Job ' + jobCount)
    }
    const handleRemoveEvent = () => {
        setJobCounter(jobCount - 1)
        console.log('Job ' + jobCount)
    }
    const handleResetEvent = () => {
        setJobCounter(0)
        console.log('Job ' + jobCount)
    }

    return (
        <div>
            <h1>Job Counter</h1>
            <p>Current Jobs: {jobCount}</p>
            <button id='btnCtr' onClick={handleAddEvent}>Add Job</button>
            <button id='btnCtr' onClick={handleRemoveEvent}>Remove Job</button>
            <button id='btnCtr' onClick={handleResetEvent}>Reset</button>
        </div>

    );
};

export default JobCounter;