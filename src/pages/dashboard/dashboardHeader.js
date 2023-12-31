import React from 'react'

function dashboardHeader() {
  return (
    
    <nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 ps-4 me-0" href="#">
          Super Admin
        </a>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </nav>

  )
}

export default dashboardHeader