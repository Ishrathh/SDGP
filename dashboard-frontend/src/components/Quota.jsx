import React, { useState} from 'react'
import Hours from './Hours'
import '../css/Quota.css'

const Quota = () => {
  const [dailyQuota, setDailyQuota] = useState(2);
  const [weeklyQuota, setWeeklyQuota] = useState(14);
  const [showQuotaInput, setShowQuotaInput] = useState(false);

  const handleSetQuotaClick = () => {
    setShowQuotaInput(true);
  };

  const handleQuotaSave = (newDailyQuota, newWeeklyQuota) => {
    setDailyQuota(newDailyQuota);
    setWeeklyQuota(newWeeklyQuota);
    setShowQuotaInput(false);
  };

  return (
    <>
    <div className='quotaComponent'>
      <div className='quotaCircle'>
        <Hours hours={dailyQuota} label="Daily quota"/>
        <Hours hours={weeklyQuota} label="Weekly quota"/>
      </div>

      {showQuotaInput ? (
        <div id='changeQuota'>
          <input type="number" placeholder="Enter daily quota" onChange={(e) => setDailyQuota(parseInt(e.target.value))} />
          <input type="number" placeholder="Enter weekly quota" onChange={(e) => setWeeklyQuota(parseInt(e.target.value))} />
          <button className='darkBtn' onClick={() => handleQuotaSave(dailyQuota, weeklyQuota)}>Save</button>
        </div>
      ) : (
        <button className='darkBtn' id="quotaBtn" onClick={() => handleSetQuotaClick()}>SET QUOTA</button>
      )}

    </div>   
    </> 
  )
}

export default Quota
