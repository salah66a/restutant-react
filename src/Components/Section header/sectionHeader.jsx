import React from 'react'
import "./section-header.css"
function SectionHeader(props) {
  return (
    <div className='section-header'>
        <h3>{props.headerText}</h3>
    </div>
  )
}

export default SectionHeader
