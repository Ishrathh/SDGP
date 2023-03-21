import React from 'react'
import NavBar from './NavBar'
import ScreenTime from './ScreenTime'
import './css/Dashboard.css'
import Quota from './Quota'
import './css/common.css'

const Dashboard = () => {
  return (
    <div>
      <NavBar/>

      <div className='content'>
        <Quota/>
          
        <div className='screenTimePane'>
          <ScreenTime/>
          <ScreenTime/>
         
          <div className='btnPane'>
            <button className='darkBtn' id='startBtn'>START TIMER</button>
            <button className='lightBtn' id='stopBtn'>STOP TIMER</button>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default Dashboard
