import React from "react"
import "./titleTolkien.css"

function TitleTolkien(props) {
    return (
        <header className="title-tolkien">
            <h1 className="title-text-tolkien">{props.text}</h1>
        </header>
    )
}

export default TitleTolkien
