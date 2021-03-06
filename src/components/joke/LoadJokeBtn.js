import React from "react"
import "./loadJokeBtn.css"
import reloadIcon from "../../assets/reload-icon.png"

function LoadJokeBtn(props) {
    return (
        <div className={"btn-container"} onClick={props.onClick}>
            <div className={"icon-container"}>
                <img src={reloadIcon} alt={"reload-icon"} className={"reload-icon"}/>
            </div>
            <div className={"text-container"}>
                <p> Load Joke</p>
            </div>

        </div>

    )
}

export default LoadJokeBtn