import React, { useEffect, useState } from 'react'
import './Contact.css'
import ContactList from './ContactList'
import copyPic from '../../assets/copy.png'

const Contact = () => {

    const [reveal, setReveal] = useState({ opacity: "0" })
    const [word, setWord] = useState("Copy")

    const handleScroll = () => {
        const scrollY = window.scrollY
        if (scrollY > 1200) {
            setReveal({ opacity: "1" })
        } else {
            setReveal({ opacity: 0 })
        }
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText("nawakoon.8@gmail.com");
        setWord("Copied!")
    }

    window.addEventListener("scroll", handleScroll)
    return (
        <div style={reveal} className="contract-page">
            <div className="container contract">
                <div className="contract header">
                    <h2>Contact</h2>
                    <p
                        className="email-link"
                        onClick={copyClipboard}
                    >nawakoon.8@gmail.com
                        <img src={copyPic} />
                        <div className="tooltiptext">{word}</div>
                    </p>
                </div>
                <ContactList />
            </div>
        </div >
    )
}

export default Contact