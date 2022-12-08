import React from 'react'
import './Home.css'
// import nightSky from "../../assets/sky.jpeg"

const Home = () => {

    const [trigger, setTrigger] = React.useState(true)
    const [cometStyle, setCometStyle] = React.useState({
        top: "30%",
        left: "50%"
    })
    const [second, setSecond] = React.useState(true)

    function randomMinMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function handleClick() {
        setCometStyle({
            top: `${randomMinMax(13, 30)}%`,
            left: `${randomMinMax(50, 93)}%`,
            animation: `animate ${randomMinMax(400, 900)}ms ease`
        })
        setTrigger(!trigger)
    }

    setTimeout(() => {
        let sec = (new Date()).getSeconds()
        setSecond(sec)
    }, randomMinMax(1002, 5000))

    React.useEffect(handleClick, [second])

    const [reveal, setReveal] = React.useState({
        opacity: "1"
    })

    const handleScroll = () => {
        const scrollY = window.scrollY
        if (scrollY > 250) {
            setReveal({ opacity: "0" })
        } else {
            setReveal({ opacity: "1" })
        }
    }

    window.addEventListener("scroll", handleScroll)

    return (
        <div className="home--container">
            <div className="backgroundImg"></div>
            {trigger ? <span style={cometStyle}></span> : <></>}
            <section style={reveal} className="container detail">
                <h1>Nawakoon</h1>
                <p>Economist sometimes</p>
                <p>Developer everyday</p>
            </section>
            <div className="kid--container" />
        </div>
    )
}

export default Home