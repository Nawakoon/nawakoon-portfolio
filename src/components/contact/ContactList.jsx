import React from 'react'
import './Contact.css'
import linkedinImg from "../../assets/linkedin.png"
import githubImg from "../../assets/github2.png"
import emailImg from "../../assets/email.png"
import cvImg from "../../assets/CV2.png"

const ContactList = () => {

    const email = "nawakoon.8@gmail.com"

    return (
        <div className="contractList">
            <a
                className="contractList item"
                href="https://www.linkedin.com/in/nawakoon/"
                target="_blank"
            >
                <img src={linkedinImg} />
            </a>
            <a
                className="contractList item github"
                href="https://github.com/Nawakoon"
                target="_blank"
            >
                <img src={githubImg} />
            </a>
            <a
                className="contractList item"
                href={`mailto:${email}`}
                target="_blank"
            >
                <img src={emailImg} />
            </a>
            <a
                className="contractList item"
                href="https://drive.google.com/file/d/11uZTuUSkWZVDvW38M5EI1yweBD_W3M0h/view?usp=sharing"
                target="_blank"
            >
                <img src={cvImg} />
            </a>
        </div>
    )
}

export default ContactList