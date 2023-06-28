import React from 'react'
import "./h2-title.css"
function H2Title(props) {
  return (
    <div className='title'>
       
        <h2>{props.title}</h2>
    </div>
  )
}

export default H2Title
