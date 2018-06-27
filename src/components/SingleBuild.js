import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const SingleBuild = ({build, onClick}) => (
  <div className="single-build">
    <div className="single_build-top_content">
      <Link
        onClick={onClick}
        to={`/build/${build.vcs_type}/${build.username}/${build.reponame}/${build.build_num}`}
      >
        <div>{build.branch} / {build.reponame} # {build.build_num}</div>
      </Link>
      <div className="top-content__time">{moment(build.stop_time).fromNow()}</div>
    </div>
    <div className="single_build-bottom_content">
      <div>{build.subject}</div>
      <div>Status: {build.status}</div>
    </div>
  </div>
);

export default SingleBuild;
