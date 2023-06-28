import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import HeroSection from "../Hero_section/heroSection"
import "./home-section.css"
function HomeSection() {
  return (
    <div className='home-section'>
     <Navbar/>
     <HeroSection/>
    </div>
  )
}

export default  HomeSection
