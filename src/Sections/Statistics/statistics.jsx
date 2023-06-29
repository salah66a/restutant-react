import React from 'react'
import "./statistics.css"
import deshes from "../../Assets/images/staff/dish.png"
import chefs from "../../Assets/images/staff/chef.png"
import team from "../../Assets/images/staff/team.png"
import StatisticsItem from "../../Components/Statistics Item/statisticsItem"
function Statistics() {
  return (
    <section className='statistics'>
        <StatisticsItem image = {deshes} number ="250+" title = "Delicacy"/>
        <StatisticsItem image = {chefs}number ="10+" title = "renowed chefs"/>
        <StatisticsItem image = {team}number ="30+" title = "Members"/>
      
    </section>
  )
}

export default Statistics
