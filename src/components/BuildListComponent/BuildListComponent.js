import React, { Component } from 'react';
import BuildItemRowComponent from '../../components/BuildItemRowComponent/BuildItemRowComponent'

const BuildListComponent = ({ builds, onClickHandler }) => {
  const displayBuilds = builds.map(build => {
    return (
      <tr key={build.id}>
        <BuildItemRowComponent build={build} onClickHandler={onClickHandler} />
      </tr>
    )
  })

  return (
    <h1>
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Repo name</th>
            <th>Build num</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            displayBuilds
          }
        </tbody>
      </table>
    </h1>
  )
}

export default BuildListComponent