import React from 'react'
import Profile from '../components/account/Profile'
import BookingHistory from '../components/account/BookingHistory'

const Account = () => {
  return (
    <div className='flex items-start gap-x-[60px] pt-[10px] pb-[34px] px-[80px]'>
      {/* Profile */}
      <Profile/>
      {/* Booking history */}
      <BookingHistory/>
    </div>
  )
}

export default Account