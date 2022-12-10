import React, { useState } from 'react'
import './Work.css'
import githubPic from "../../assets/github2.png"
import openPic from "../../assets/open.png"

const Project = () => {

    const [reveal, setReveal] = useState({
        opacity: "0"
    })

    const handleScroll = () => {
        const scrollY = window.scrollY
        if (scrollY > 270 && scrollY < 800) {
            setReveal({ opacity: "1" })
        } else {
            setReveal({ opacity: 0 })
        }
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <section style={reveal} className="project-list">
            <h2>Projects</h2>
            <div className="project id1">
                <h3>Nawakoon Portfolio</h3>
                <p>my portfolio website</p>
                <p className="tect">React</p>
                <div className="button-container">
                    <a
                        className="btnProject"
                        href="#home"
                    ><img className="btnImage" src={openPic} /></a>
                    <a
                        className="btnProject"
                        href="https://github.com/Nawakoon"
                        target="_blank"
                    ><img className="btnImage" src={githubPic} /></a>
                </div>
            </div>
            <div className="project id2">
                <h3>Loser Simulator</h3>
                <p> mini game one-day project</p>

                <p className="tect">Python</p>
                <div className="button-container">
                    <a
                        className="btnProject--id2"
                        href="#home"
                    ><img className="btnImage" src={openPic} /></a>
                    <a
                        className="btnProject--id2"
                        href="https://github.com/Nawakoon"
                        target="_blank"
                    ><img className="btnImage" src={githubPic} /></a>
                </div>
            </div>
            <div className="project id3">
                <h3>Every OOP</h3>
                <p>study object oriented programming</p>
                <p className="tect">Python, Java</p>
                <div className="button-container ">
                    <a
                        className="btnProject"
                        href="#home"
                    ><img className="btnImage" src={openPic} /></a>
                    <a
                        className="btnProject"
                        href="https://github.com/Nawakoon"
                        target="_blank"
                    ><img className="btnImage" src={githubPic} /></a>
                </div>
            </div>
        </section >
    )
}

export default Project