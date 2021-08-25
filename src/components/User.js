import React from "react"
import profilePicture from "../assets/profile-picture-placeholder.png"

function Worker(props) {
    return (
        <div className="worker">
            <img src={profilePicture} alt={"user profile image placeholder"}/>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Worker
