import React from 'react'
import NavBar from '../components/NavBar'
import ScreenTime from '../components/ScreenTime'
import '../css/Dashboard.css'
import Quota from '../components/Quota'
import '../css/common.css'
import Timer from '../components/Timer'
import Suggestions from '../components/Suggestions'

const Dashboard = () => {
  return (
    <div>
      <NavBar/>

      <div className='content'>
        <Quota />
          
        <div className='rightPane'>
          <Suggestions/>
          <div className='screenTimePane'>
            <ScreenTime title="Daily Screen Time" gamingHours="0" nonGamingHours="0"/>
            <ScreenTime title="Weekly Screen Time" gamingHours="0" nonGamingHours="0"/>
          </div>

          <Timer/>
        </div>        
      </div>
    </div>
  )
}

export default Dashboard
