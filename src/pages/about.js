import React from 'react'
import Link from 'gatsby-link'
import avatar from '../assets/ian.jpg'

export default () => (
  <div className="container p-4">

    <h1>Hi, my name is Ian Kennington Walter</h1>

    <p className="content mt-5">

      <img
        src={avatar}
        className="avatar float-sm-left rounded mr-5 mt-4 mb-5 mb-sm-4 mb-xl-0" />

      I'm a professional software developer who loves creating
      things. I mostly work on web applications and I'm currently helping
      {' '}<a href="https://binx.health" className="fontWeight400">Binx Health</a>{' '}
      create an application to make it easy for people to get accurate at-home
      testing for sextually-transmitted infections.

      I like working on side projects and contributing to open source software
      as much as I can.
      {' '}<a href="/projects" className="fontWeight400">Click here</a>{' '}
      to take a look at some of the projects I'm working on.

    </p>

    <p className="content">
      This is my personal website and it's built using
      {' '}<a href="" className="fontWeight400">GatsbyJS</a> and
      {' '}<a href="" className="fontWeight400">Bootstrap</a>. It's hosted on
      {' '}<a href="" className="fontWeight400">Netlify</a> and you can find the source code on
      {' '}<a href="" className="fontWeight400">GitHub</a>.
    </p>

  </div>
)
