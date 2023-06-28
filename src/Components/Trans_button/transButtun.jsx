import React from 'react'
import "./trans-button.css"
function TransButtun(props) {
  return (
    <div className='trans-button'>
      <button>{props.text}</button>
    </div>
  )
}

export default TransButtun
