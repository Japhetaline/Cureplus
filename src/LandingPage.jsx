import React from 'react'
import { Header } from './Components/Header/Header'
import Hero from './Components/Heros/Hero'
import Features from './Components/Features/Features'
import About from './Components/About/About'
import Faq from './Components/Faq/Faq'
import Footer from './Components/Footer/Footer'


function LandingPage() {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <About/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default LandingPage