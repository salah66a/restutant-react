import React from 'react'
import "./offer.css"
import TransButtun from '../../Components/Trans_button/transButtun'
import GoldenDesgin from "../../Components/Golden Design/goldenDesgin"
function Offer() {
  return (
    <section className='offer-section'>
      <GoldenDesgin/>
      <div className="offer-design-content">
            <h2 className="title">Come join us for a lunch this weekend and enjoy</h2>
            <h3 className='offer-percent'>FLAT 10% OFF</h3>
            <TransButtun text ="Book Now"/>
      </div>
      <GoldenDesgin/>
    </section>
  )
}

export default Offer
