import React from "react"
import "./header.css"

function Header(props) {
    return (
        <header>
            <h1>{props.text}</h1>
        </header>
    )
}

export default Header
