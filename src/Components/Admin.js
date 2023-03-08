import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarAdmin } from './SideBarAdmin'

function Admin() {
  return (
    <div>
      <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarAdmin />
          </div>
          <div className='col-9'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Admin
