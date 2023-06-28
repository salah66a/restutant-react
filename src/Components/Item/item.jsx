import React from 'react'
import "./item.css"
function Item(props) {
  return (
    <div className='item'>
        <img src={props.imageItem} alt="item1" />
        <div className="item-details">
            <h5>{props.name}</h5>
            <span>{props.details}</span>
        </div>
        <hr className='line'/>
        <span className="price">
          {props.price}
        </span>
    </div>
  )
}
export default Item
