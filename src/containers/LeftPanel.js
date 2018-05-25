import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from '../components/Search'
import { 
  selectDocument,
  changeToAddMode,
  searchDocument,
} from '../reducers/documents'

import './css/LeftPanel.css'

class LeftPanel extends Component {

  handleSearch = (event) => {
    this.props.searchDocument(event.target.value)
  }

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
      <div className="left_panel-top_content">
        <Search className="document-search" onChange={this.handleSearch} val={this.props.searchText} />
        <button onClick={this.props.changeToAddMode}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  documents: state.documents.list,
  selected: state.documents.selected,
  searchText: state.documents.searchText,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  selectDocument,
  changeToAddMode,
  searchDocument,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanel)
