import React from 'react'
import Hours from './Hours'
import '../css/Quota.css'
import SetQuotaPopup from './SetQuotaPopup'

const Quota = (props) => {
  return (
    <>
    <div className='quotaComponent'>
      <div className='quotaCircle'>
        <Hours hours="2" label="Daily quota"/>
        <Hours hours="14" label="Weekly quota"/>
      </div>
      
      <button className='darkBtn' id="quotaBtn" >SET QUOTA</button>
    </div>

    {/* <SetQuotaPopup/> */}
    </> 
  )
}

export default Quota
