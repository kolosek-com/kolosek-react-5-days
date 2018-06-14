import React, {Component} from 'react';

import SingleBuild from '../../components/SingleBuild'
import withLoader from '../HOCLoader'

import './css/List.css'

class List extends Component {

  constructor(props) {
    super(props);
    this.containerDiv = React.createRef();
  }

  selectBuild = (build) => () => {
    this.props.selectBuild(build);
  }

  handleScrollToTop = () => {
    this.containerDiv.current.scrollTop = 0
  }

  render() {
    return (
      <div className="builds_container" ref={this.containerDiv}>
        <div>
          <h1 className="builds_container__header">Circle CI</h1>
          { this.renderLatestBuilds() }
        </div>
        <button onClick={this.handleScrollToTop}>Scroll to top</button>
      </div>
    );
  }

  renderLatestBuilds() {
    return (
      <div>
        <h2>Latest builds</h2>
        {
          this.props.list.map(build => {
            return (
              <SingleBuild 
                key={build.build_num} 
                build={build} 
                onClick={this.selectBuild(build)}
              />)
          })
        }
      </div>
    )
  }
}

export default withLoader(List);
