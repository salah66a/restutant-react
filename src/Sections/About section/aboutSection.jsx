import React from 'react'
import "./about-section.css"
import SectionHeader from '../../Components/Section header/sectionHeader'
import Container from '../../Components/Container/container'
import AboutImage from "../../Assets/images/about-image.png"
import TransButtun from "../../Components/Trans_button/transButtun"
import H2Title from "../../Components/H2 title/h2Title"
function AboutSection() {
  return (
    <div className="about-section">
      <Container>
        <div className="about-section-content">
        <div className="about-content">
              <SectionHeader headerText ="About Us"/>
              <H2Title title ="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"/>
            
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perferendis deserunt facilis debitis, reiciendis incidunt culpa voluptates dolores. Aut aspernatur voluptatibus nisi minus. Unde commodi consequuntur eligendi assumenda ipsam perferendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perferendis deserunt facilis debitis, reiciendis incidunt culpa voluptates dolores. Aut aspernatur voluptatibus nisi minus. Unde commodi consequuntur eligendi assumenda ipsam perferendis.</p>
              <TransButtun text = "Read More"/>
          </div>
          <div className="about-image">
              <img src={AboutImage} alt="AboutImage" />
          </div>


        </div>

        </Container>
    </div>
  )
}

export default AboutSection