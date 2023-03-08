import React, { Children } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { BankProfile } from './BankProfile'
import { RegCustomer } from './RegCustomer'
import { SideBarBank } from './SideBarBank'

function Bank() {
  return (
    <div>
      <div className='row m-0'>
          <div className='col-3 p-0'>
            <SideBarBank />
          </div>
          <div className='col-9'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Bank
