import React from "react"
import "./joke.css"
import LoadJokeBtn from "./LoadJokeBtn";

function Joke(props) {
    return (
        <div className={"joke-container"}>
            <div className={"joke-description-container"}>
                <p>{props.joke}</p>
            </div>
            <div className={"load-joke-button-container"}>
                <LoadJokeBtn/>
            </div>

        </div>

    )
}

export default Joke