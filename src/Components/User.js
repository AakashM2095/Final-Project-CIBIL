import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarUser } from './SideBarUser'

function User() {
  return (
    <div>
      <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarUser />
          </div>
          <div className='col-9'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default User
