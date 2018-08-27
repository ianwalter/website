import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar navbar-dark bg-dark p-4"
  >
    <div className="container">

      <Link
        to="/"
        className="navbar-brand"
      >
        {siteTitle}
      </Link>

      <ul className="nav nav-pills ml-auto">
        <li className="nav-item">
          <a className="nav-link active mr-3 text-dark" href="/">Posts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>

    </div>
  </nav>
)

export default Header
