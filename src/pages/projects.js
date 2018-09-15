import React from 'react'

const authored = [
  {
    name: 'launch',
    description: `
      A simple process manager used to run a Node.js application in
      detached mode
    `,
    color: '#ff7473',
    url: 'https://github.com/appjumpstart/launch'
  },
  {
    name: 'booster',
    description: `
      A Knex.js utility to make setting up a database super easy
    `,
    color: '#47b8e0',
    url: 'https://github.com/appjumpstart/booster'
  },
  {
    name: 'prescott',
    description: `
      A super-simple templating language
    `,
    color: '#ffc952',
    url: 'https://github.com/ianwalter/prescott'
  },
  {
    name: 'relay',
    description: `
      A flexible API to forward HTTP requests to another server
    `,
    color: '#58C9B9',
    url: 'https://github.com/ianwalter/relay'
  },
  {
    name: 'peregrin',
    description: `
      Toolkit for converting API Blueprint files to JSON and consuming that JSON
    `,
    color: '#F68657',
    url: 'https://github.com/ianwalter/peregrin'
  },
  {
    name: 'imgex',
    description: `
      Unofficial client library for generating Imgix URLs in Elixir
    `,
    color: '#9055A2',
    url: 'https://github.com/ianwalter/imgex'
  },
  {
    name: 'sled',
    description: `
      A JavaScript micro-library for animating an element's height to create a
      slide effect
    `,
    color: '#a5dff9',
    url: 'https://github.com/ianwalter/sled'
  },
  {
    name: 'base-error',
    description: `
      A general base Error class that can be extended to create custom Error
      classes
    `,
    color: '#EE7785',
    url: 'https://github.com/ianwalter/base-error'
  },
  {
    name: 'promise-complete',
    description: `
      Call all promises in an array whether they resolve or reject
    `,
    color: '#6AAFE6',
    url: 'https://github.com/ianwalter/promise-complete'
  },
  {
    name: 'execa-git',
    description: `
      A wrapper around execa to help run git commands
    `,
    color: '#99f19e',
    url: 'https://github.com/ianwalter/execa-git'
  }
]

const contributed = [
  {
    name: 'cssnano',
    description: `
      A modular minifier, built on top of the PostCSS ecosystem
    `,
    url: 'https://github.com/cssnano/cssnano'
  },
  {
    name: 'cobra',
    description: `
      A Commander for modern Go CLI interactions
    `,
    url: 'https://github.com/spf13/cobra'
  },
  {
    name: 'prompts',
    description: `
      Lightweight, beautiful and user-friendly interactive prompts
    `,
    url: 'https://github.com/terkelg/prompts'
  },
  {
    name: 'surge',
    description: `
      CLI for the surge.sh CDN
    `,
    url: 'https://github.com/sintaxi/surge'
  }
]

export default () => (
  <div className="container p-4">

    <div className="d-flex text-secondary mb-3 align-items-center">
      <small className="flex-shrink-0 pr-3">
        Selected Authored Open Source
      </small>
      <div className="w-100">
        <hr />
      </div>
    </div>

    <div className="row">
      {authored.map(project => (
        <div className="col-12 col-md-6 col-lg-4">
          <a href={project.url} className="project text-white" target="_window">
            <div className="card my-3">
              <div
                className="card-body"
                style={{ borderTop: `5px solid ${project.color}` }}>

                <div className="fontWeight500 mb-2">
                  {project.name}
                </div>

                <small>
                  {project.description}
                </small>

              </div>
            </div>
          </a>
        </div>
      ))}
    </div>

    <div className="d-flex text-secondary mt-5 mb-3 align-items-center">
      <small className="flex-shrink-0 pr-3">
        Selected Contributed Open Source
      </small>
      <div className="w-100">
        <hr />
      </div>
    </div>

    <div className="mb-5">
      {contributed.map(project => (
        <div className="p-1">
          <a href={project.url} target="_window" className="fontWeight500">
            {project.name}
          </a>
          {' '} - <small>{project.description}</small>
        </div>
      ))}
    </div>

  </div>
)
