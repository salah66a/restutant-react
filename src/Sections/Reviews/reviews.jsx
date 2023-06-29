import React from 'react'
import "./reviews.css"
import SectionHeader from "../../Components/Section header/sectionHeader"
import H2Title from "../../Components/H2 title/h2Title"
import ReviewaCard from "../../Components/reviews card/reviewsCard"
import avatar1 from "../../Assets/images/Ellipse.png"
import avatar2 from "../../Assets/images/Ellipse.png"
import avatar3 from "../../Assets/images/Ellipse.png"
function Reviews() {
  return (
    <section className='reviews'>
        <div className="reviews-header">
            <SectionHeader headerText = "Reviews" className="center"/>
            <H2Title title ="words from our food lovers"/>
            <div className="cards">
               <ReviewaCard avatar = {avatar1} name ="Alex andrina" content = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>        
               <ReviewaCard avatar = {avatar2} name ="Alex andrina" content = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>        
               <ReviewaCard avatar = {avatar3} name ="Alex andrina" content = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>        
               <ReviewaCard avatar = {avatar3} name ="Alex andrina" content = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"/>        
            </div>
        </div>
    </section>
  )
}

export default Reviews
