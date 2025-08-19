import React from 'react'
import PointsUser from './partials/points-user'
import ControlMonths from './partials/control-months'

const UserPerformance = () => {
  return (
    <div className='w-[800px] p-6 space-y-4'>
      <PointsUser />
      <ControlMonths />
    </div>
  )
}

export default UserPerformance