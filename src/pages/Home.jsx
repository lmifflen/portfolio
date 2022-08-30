import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import ChatPopup from '../components/Contact/ContactPopup'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  return (
    <div>

    <Intro></Intro>
    <About></About>
    <Portfolio></Portfolio>
    <Footer></Footer>
    </div>
  )
}

export default Home