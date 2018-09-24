import React from 'react'
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="inputHolder">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={props.changed} value={props.username}/>
        </div>
    )
};

export default userInput