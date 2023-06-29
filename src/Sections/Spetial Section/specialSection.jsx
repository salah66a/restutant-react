import React from 'react'
import "./sepcial-section.css"
import SectionHeader from "../../Components/Section header/sectionHeader"
import Card from "../../Components/Card/card"
import exoticDishes from "../../Assets/images/special/Exotic-dishes.png"
import freshFood from "../../Assets/images/special/Fresh-food.png"
import skilledChef from "../../Assets/images/special/skilled-Chef.png"
import H2Title from "../../Components/H2 title/h2Title"

function SpecialSection() {
  return (
    <section className='special-section'>
        <SectionHeader headerText ="Special"/>
        <H2Title title ="What makes us special"/>
       
        <div className="cards">
            <Card image ={exoticDishes} title = "Exotic Dishes" paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
           
            <Card image ={freshFood} title = "Fresh Food" paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
           
            <Card image ={skilledChef} title = "Skilled Chef" paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "/>
           
        </div>
    </section>
  )
}

export default SpecialSection
    