import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

import './CircleCiBuild.css';

class CircleCiBuild extends Component {
  render() {
    var { build, onClick } = this.props;
    let statusClass;
    switch (build.status) {
      case 'fixed':
      case 'success':
        statusClass = 'circleci-build-status success';
        break;
      case 'failed':
        statusClass = 'circleci-build-status fail';
        break;
      case 'running':
        statusClass = 'circleci-build-status running';
        break;
      default:
        statusClass = 'circleci-build-status';
    }

    return (
      <div className="row circleci-build" key={`${build.vcs_type}-${build.username}-${build.reponame}-${build.build_num}`}>
        <div className="col-12">
          <Link
            onClick={onClick}
            to={`/build/${build.vcs_type}/${build.username}/${build.reponame}/${build.build_num}`}
            className="circleci-build-link"
          >
            <div className="row">
              <div className="col-10 circleci-build-title">
                {build.branch}/{build.reponame} #{build.build_num}
              </div>
              <div className="col-2">
                <TimeAgo date={build.queued_at} />
              </div>
            </div>
            <div className="row">
              <div className="col-8 circleci-build-commit-msg">
                {build.subject}
              </div>
              <div className="col-2 circleci-build-status-label">
                Status:
              </div>
              <div className="col-2">
                <strong className={statusClass}>{build.status}</strong>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}


const CircleCiBuild_Connected = connect(null, null)(CircleCiBuild);

export default CircleCiBuild_Connected;
