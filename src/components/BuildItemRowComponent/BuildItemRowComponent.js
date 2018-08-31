import React from 'react';
import { Link } from 'react-router-dom'

const BuildItemRowComponent = ({ build, onClickHandler }) => {
  return (
    <React.Fragment>
      <td>{build.branch}</td>
      <td>{build.reponame}</td>
      <td>{build.build_num}</td>
      <td>{build.added_at}</td>
      <td>{build.status}</td>
      <td>
        <Link
          key={build.id}
          onClick={() => onClickHandler(build) }
          to={`/build/${build.id}`} >
          Show build
        </Link>
      </td>
    </React.Fragment>
  )
}

export default BuildItemRowComponent