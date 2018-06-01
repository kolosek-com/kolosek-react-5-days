import React, { Component } from 'react';
import './styles.css';

class Commit extends Component {

  viewDetails = () => {
  };

  render() {
    var { projectName, branchName, status, commitMsg } = this.props.build
    return (
      <div className="commit" onClick={this.viewDetails}>
        <div className='flex-holder-space-between'>
          <div className='branch-details'><b>{branchName} / {projectName} #{this.props.buildNo}</b></div>
          <div className='time'> time ago</div>
        </div>
        <div className='flex-holder-space-between'>
          <div className='msg'>{ commitMsg }</div>
          <div className='flex-holder-space-between status-holder'>
             <label className='status'>Status: </label>
             <label className={'status-' + status}>{status.charAt(0).toUpperCase() + status.slice(1)}</label> 
          </div>
        </div>
      </div>
    );
  };
};

export default Commit;