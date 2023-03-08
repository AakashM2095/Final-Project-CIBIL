import React from 'react'
import { FaUniversity, FaSignOutAlt, FaUserFriends, FaListAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoRequestChanges } from "react-icons/go";
import { Link } from 'react-router-dom';
import './SideBar.css';

export function SideBarAdmin() {
  return (

    <div className='container-fluid '>
      <div className='row'>
        <div className='bg-dark col-md-3 min-vh-100 text-start d-flex flex-column py-3' style={{ fontFamily: 'serif', position: 'fixed' }}>
          <div >
            <a className='text-decoration-none text-white p-4 text-center d-none d-sm-inline d-flex ms-3 mt-2'>
              <img
                src="Logo.png"
                width="50"
                height="40"
                className="d-inline-block align-top rounded-circle mx-2 d-none d-sm-inline"
                alt="React Bootstrap logo"
              />
              <span className='ms-1 fs-4 d-none d-sm-inline' >Cibil System</span>
            </a>
            <hr className='text-secondary d-none d-sm-block' />
            <a className='text-decoration-none text-white p-4 text-center d-none d-sm-inline d-flex ms-3 mt-2'>
              <i className='mx-3'><RiAdminFill size={'2rem'} className="text-white" /></i>
              <span className='ms-1 fs-4 d-none d-sm-inline'>Admin</span>
            </a>
            <hr className='text-secondary d-none d-sm-block' />
            <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
              <Link to={'viewBanks'} style={{ textDecoration: 'none', color: "white" }}>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                  <a href='#' className='nav-link text-white fs-5' aria-current='page'>
                    <i className='mx-2'><FaUniversity /></i>
                    <span className='ms-3 d-none d-sm-inline'>View Banks</span>
                  </a>
                </li>
              </Link>
              <Link to={'viewUsers'} style={{ textDecoration: 'none', color: "white" }}>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                  <a href='#' className='nav-link text-white fs-5' aria-current='page'>
                    <i className='mx-2'><FaUserFriends /></i>
                    <span className='ms-3 d-none d-sm-inline'>View Users</span>
                  </a>
                </li>
              </Link>
              <Link to={'rankList'} style={{ textDecoration: 'none', color: "white" }}>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                  <a href='#' className='nav-link text-white fs-5' aria-current='page'>
                    <i className='mx-2'><FaListAlt /></i>
                    <span className='ms-3 d-none d-sm-inline'>Rank List</span>
                  </a>
                </li>
              </Link>
              <Link to={'improvementReq'} style={{ textDecoration: 'none', color: "white" }}>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                  <div className='nav-link text-white fs-5' aria-current='page'>
                    <i className='mx-2'><GoRequestChanges /></i>
                    <span className='ms-3 d-none d-sm-inline'>Improvement Requests</span>
                  </div>
                </li>
              </Link>
              <Link to={'/'} style={{ textDecoration: 'none', color: "white" }}>
                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                  <a href='#' className='nav-link text-white fs-5' aria-current='page'>
                    <i className='mx-2'><FaSignOutAlt /></i>
                    <span className='ms-3 d-none d-sm-inline'>Logout</span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
