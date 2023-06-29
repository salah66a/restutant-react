import React from 'react'
import "./cooking.css"
import SectionHeader from '../../Components/Section header/sectionHeader'
import Container from '../../Components/Container/container'
import cookingImage from "../../Assets/images/cooking-image.png"
import TransButtun from "../../Components/Trans_button/transButtun"
import H2Title from "../../Components/H2 title/h2Title"
function Cooking() {
  return (
    <section className="cooking-section" id="#about">
      <Container>
        <div className="cooking-section-content">
        <div className="cooking-content">
              <SectionHeader headerText ="About Us"/>
              <H2Title title ="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"/>
            
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perferendis deserunt facilis debitis, reiciendis incidunt culpa voluptates dolores. Aut aspernatur voluptatibus nisi minus. Unde commodi consequuntur eligendi assumenda ipsam perferendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui perferendis deserunt facilis debitis, reiciendis incidunt culpa voluptates dolores. Aut aspernatur voluptatibus nisi minus. Unde commodi consequuntur eligendi assumenda ipsam perferendis.</p>
              <TransButtun text = "Read More"/>
          </div>
          <div className="cooking-image">
              <img src={cookingImage} alt="cookingImage" />
          </div>


        </div>

        </Container>
    </section>
  )
}

export default Cooking