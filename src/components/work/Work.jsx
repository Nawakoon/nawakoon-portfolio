import React from 'react'
import Project from './Project'
import Skill from './Skill'
import './Work.css'

const Work = () => {

    return (
        <div className="work-page">
            <div className="container project">
                <Project />
            </div>
            <div className="container skill">
                <Skill />
            </div>
        </div >
    )
}

export default Work