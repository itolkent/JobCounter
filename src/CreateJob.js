import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

const JobCounter = () => {
    let [jobCount, setJobCounter] = useState(0)
    const [inputVal, setInputValue] = useState("")
    const [txt, setText] = useState("")

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
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        setText(event.target.value);

    };
    const handleClear = () => {
        setInputValue("")
        setText("");
    };

    return (
        <div>
            <h1>Job Counter</h1>
            <p>Current Jobs: {jobCount}</p>
            <button id='btnCtr' onClick={handleAddEvent}>Add Job</button>
            <button id='btnCtr' onClick={handleRemoveEvent}>Remove Job</button>
            <button id='btnCtr' onClick={handleResetEvent}>Reset</button>
            <div>
                <h1>Dynamic Form</h1>
                <input
                    type="text"
                    value={txt}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <button id='btnCtr' onClick={handleClear}>Clear</button>
                <div>
                    <h2>Current Input:</h2>
                    <div className="input-container">

                        <p>{inputVal}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default JobCounter;