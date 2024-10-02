import React from "react"
import logo from "../images/airbnblogo.png"
import "./header.css"
export default function Header() {
    return (
        <nav className="header">
            <img className="logo" src={logo} alt="AirBNB logo"></img>
        </nav>
    )
}