import React from "react"
import profilePicture from "../assets/profile-picture-placeholder.png"

function User(props) {
    return (
        <div className="worker">

            <div className={"worker-profile-picture-container"}>
                <img src={profilePicture} alt={"user placeholder"} className={"user-profile-picture"}/>
            </div>

            <div className={"worker-profile-picture-info"}>
                <h1>{props.name}</h1>
                <p>{props.role}</p>
            </div>


        </div>
    )
}

export default User
