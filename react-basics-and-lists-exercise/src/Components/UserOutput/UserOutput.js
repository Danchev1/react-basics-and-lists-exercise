import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Lorem ipsun: {props.username}</p>
        </div>
    )

};
export default userOutput;