import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { 
  selectDocument,
  changeToAddMode,
} from '../reducers/documents'

import './css/LeftPanel.css'

class LeftPanel extends Component {
  render() {
    return (
      <div className="left_panel-container">
        {this.renderTopContent()}
        {this.renderList()}
      </div>
    );
  }

  renderList() {
    const { documents, selected } = this.props
    return(
      <div className="left_panel-list">
        {
         documents.map(doc => {
            return(
              <div 
                key={doc.id} 
                className={`left_panel-list__document-title ${doc.id === selected.id ? "left_panel-list__document-title--selected" : ""}`} 
                onClick={() => this.props.selectDocument(doc)}
              >
                {doc.title}
              </div>);
          })
        }
      </div>
    );
  }

  renderTopContent() {
    return(
      <div>
        <input name="search" type="text" placeholder="Search a document" />
        <button onClick={this.props.changeToAddMode}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  documents: state.documents.list,
  selected: state.documents.selected,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  selectDocument,
  changeToAddMode,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanel)
