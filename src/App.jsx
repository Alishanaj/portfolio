import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Navbar/Nav'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Offer from './Components/Offer/Offer'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Offer/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
</>

  )
}

export default App