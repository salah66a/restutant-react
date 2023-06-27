import React from 'react'
import "./orange-button.css"
function OrangeButton(props) {
  return (
    <div className='orange-button'>
        <button>{props.text}</button>
    </div>
  )
}
export default OrangeButton
