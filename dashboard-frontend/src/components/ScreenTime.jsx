import React from 'react'
import Hours from './Hours'
import '../css/ScreenTime.css'

const ScreenTime = (props) => {
  return (
    <div className='screenTime'>
    <div className='screenTimetitle'>
        {props.title}
    </div>

    <Hours hours={props.gamingHours} label="Gaming Applications"/>
    <Hours hours={props.nonGamingHours} label="Non Gaming Applications"/> 
    </div>
  )
}

export default ScreenTime
