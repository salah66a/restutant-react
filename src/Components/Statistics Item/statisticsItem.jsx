import React from 'react'
import "./statistics-item.css"

function StatisticsItem(props) {
  return (
    <div className='statistics-item'>
        <img src={props.image} alt="itemimage" />
        <div className="statistics-item-details">
          <h3>{props.number}</h3>
          <span className='item-title'>{props.title}</span>
        </div>
    </div>
  )
}

export default StatisticsItem
