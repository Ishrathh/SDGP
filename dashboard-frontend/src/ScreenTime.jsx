import React from 'react'
import Hours from './Hours'
import './css/ScreenTime.css'

const ScreenTime = () => {
  return (
    <div className='screenTime'>
    <div className='screenTimetitle'>
        Weekly Screen Time
    </div>

    <Hours/>
    <Hours/> 
    </div>
  )
}

export default ScreenTime
