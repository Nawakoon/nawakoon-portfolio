import React from 'react'
import Home from './components/home/Home'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div id="home">
      <Home />
      <Work />
      <Contact />
    </div>
  )
}

export default App