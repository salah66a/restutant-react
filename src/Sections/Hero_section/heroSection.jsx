import React from 'react'
import "./hero-section.css"
import TransButtun from '../../Components/Trans_button/transButtun'
function HeroSection() {
  return (
    <div className='hero-section'>
      <h2>Welcome To <br/>Golden View Dine</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, consequuntur.</p>
      <TransButtun text="Read More"/>
    </div>
  )
}

export default HeroSection
