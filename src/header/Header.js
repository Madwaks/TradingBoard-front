import React from "react"
import "./Header.css"
import ConnButton from "../buttons/connection/connection";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Title">TradeFox.tech</div>
                <ConnButton />
            </div>
        )
    }
}

export default Header