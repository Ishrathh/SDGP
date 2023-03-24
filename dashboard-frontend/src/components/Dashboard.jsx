import React from 'react'
import NavBar from './NavBar'
import ScreenTime from './ScreenTime'
import '../css/Dashboard.css'
import Quota from './Quota'
import '../css/common.css'
import Timer from './Timer'

const Dashboard = () => {
  return (
    <div>
      <NavBar/>

      <div className='content'>
        <Quota />
          
        <div className='screenTimePane'>
          <ScreenTime title="Daily Screen Time" gamingHours="2" nonGamingHours="10"/>
          <ScreenTime title="Weekly Screen Time" gamingHours="14" nonGamingHours="70"/>
          
          <Timer/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
