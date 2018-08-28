import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar navbar-dark bg-dark p-4 container"
  >

    <Link
      to="/"
      className="navbar-brand"
    >
      {siteTitle}
    </Link>

    <ul className="nav nav-pills ml-sm-auto mt-4 mt-sm-0">
      <li className="nav-item">
        <Link
          exact
          to="/"
          activeClassName="active"
          className="nav-link">
          Posts
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          activeClassName="active"
          className="nav-link">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          activeClassName="active"
          className="nav-link">
          About
        </Link>
      </li>
    </ul>

  </nav>
)

export default Header
