import React from "react"
import "./title.css"

function Title(props) {
    return (
        <header className="section-title">
            <h1 className="title-text-title">{props.text}</h1>
        </header>
    )
}

export default Title
