import React from "react"
import profilePicture from "../assets/profile-picture-placeholder.png"

function Card(props) {

    let cardStyle = "card"

    if(props.scratched){
        cardStyle = "clickedCard"
    }

    return (
        <div className={cardStyle} onClick={props.onClick}>

            <div className={"card-profile-picture-container"}>
                <img src={profilePicture} alt={"card placeholder"} className={"card-profile-picture"}/>
            </div>

            <div className={"card-profile-picture-info"}>
                <h1>{props.name}</h1>
                <p>{props.role}</p>
            </div>


        </div>
    )
}

export default Card
