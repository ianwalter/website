import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar navbar-light bg-light p-4"
  >

    <Link
      to="/"
      className="navbar-brand"
    >
      {siteTitle}
    </Link>

    <ul className="nav nav-pills ml-auto">
      <li className="nav-item">
        <a className="nav-link active" href="#">Posts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
    </ul>

  </nav>
)

export default Header
