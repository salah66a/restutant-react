import React from 'react'


import "./card.css"
function Card(props) {
  return (
   
       <div className="card">
                <img src={props.image} alt="" />
                <h4>{props.title}</h4>
                <p>{props.paragraph}</p>
    </div>
  )
}

export default Card
