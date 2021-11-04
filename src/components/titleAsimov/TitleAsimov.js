import React from "react"
import "./titleAsimov.css"

function TitleAsimov(props) {
    return (
        <header className="title-header">
            <h1 className="title-text-asimov">{props.text}</h1>
        </header>
    )
}

export default TitleAsimov
