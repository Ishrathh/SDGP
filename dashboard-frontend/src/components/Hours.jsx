import React from 'react'
import '../css/Hours.css'

const Hours = (props) => {
  return (
    <div className='hourComponent'>
      <div className='hours'>{props.hours} hrs</div>
      <div>{props.label}</div>
    </div>
  )
}

export default Hours
