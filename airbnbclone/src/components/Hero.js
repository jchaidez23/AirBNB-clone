import React from "react"
import groupphoto from "../images/Group77.png"
import './hero.css'

export default function Hero(){
    return (
        <div className="hero">
            <img className="hero-image" src={groupphoto} alt="Group of pictures of travelers"/>
            <h1 >Online Experiences</h1>
            <p>
                Join unique interactive activities led by 
                one-of-a-kind hosts-all without leaving
                home.
            </p>
        </div>
    )

}