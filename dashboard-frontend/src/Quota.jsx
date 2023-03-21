import React from 'react'
import Hours from './Hours'
import './css/Quota.css'

const Quota = () => {

  return (
    <>
    <div className='quotaComponent'>
      <Hours/>
      <Hours/>

      <button className='darkBtn'>SET QUOTA</button>
    </div>
    </> 
  )
}

export default Quota
