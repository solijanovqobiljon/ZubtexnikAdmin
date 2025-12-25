import React from 'react'
import AdminLayot from "../Home/AdminLayout"
import UserBody from "../UserHome/userBody"

function UserHome() {
  return (
    <div className='flex h-[310vh]  bg-[#eaedf8]'>
      <UserBody />
    </div>
  )
}

export default UserHome
