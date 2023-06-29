import React from 'react'
import "./reviews-card.css"

import stars from "../../Assets/images/Group.png"
function ReviewsCard(props) {
  return (
    <div className='reviews-card'>
        <div className="avatar-name">
          <img className ="avatar"src={props.avatar} alt="" />
          <div className='card-name-stars'>
              <h2 className='card-name'>{props.name}</h2>
              <img className='satrs' src={stars} alt="stars" />
          </div>
        </div>
        <p>{props.content}</p>
    </div>
  )
}

export default ReviewsCard
