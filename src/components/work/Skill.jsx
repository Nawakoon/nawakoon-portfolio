import React, { useState } from 'react'
import './Work.css'
import reactLogo from "../../assets/reactLogo.png"
import nodeLogo from "../../assets/nodeLogo.png"
import hardhatLogo from "../../assets/hardhatLogo.png"

export const Skill = () => {

    const [reveal, setReveal] = useState({
        opacity: "0"
    })

    const handleScroll = () => {
        const scrollY = window.scrollY
        if (scrollY > 750 && scrollY < 1200) {
            setReveal({ opacity: "1" })
        } else {
            setReveal({ opacity: 0 })
        }
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <section style={reveal} className="skill-list">
            <h2>Services</h2>
            <div className="services--list">
                <p>front-end / back-end development</p>
                <p>smart contract development</p>
            </div>
            <div className="tools--list">
                <div>
                    <img className="tools--logo" src={reactLogo} />
                    <p>React</p>
                </div>
                <div>
                    <img className="tools--logo" style={{ width: "37px" }} src={nodeLogo} />
                    <p>Node</p>
                </div>
                <div>
                    <img className="tools--logo" style={{ height: "35px" }} src={hardhatLogo} />
                    <p>Hardhat</p>
                </div>
            </div>
        </section >
    )
}

export default Skill

    // < div className = "skill langs" >
    //             <p>HTML</p>
    //             <p>CSS</p>
    //             <p>JavaScript</p>
    //             <p>Python</p>
    //             <p>Solidity</p>
    //             <p>SQL</p>
    //         </ >
    // <div className="skill tools">
    //     <p>Git</p>
    //     <p>Node.js</p>
    //     <p>Express.js</p>
    //     <p>React.js</p>
    //     <p>Hardhat.js</p>
    //     <p>RESTful</p>
    // </div>