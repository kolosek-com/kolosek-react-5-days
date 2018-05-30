import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/Button'
import Input from '../components/Input'

import { 
  selectDocument,
  changeToAddMode,
} from '../reducers/documents'

import AddIcon from '../assets/images/plus.png'

import './css/LeftPanel.css'

class LeftPanel extends Component {

  constructor(props){
    super(props)
    this.state = { searchText: '' }
  }

  handleSearch = (event) => {
    this.setState({ searchText: event.target.value })
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
    let filteredDocuments = this.state.searchText.length === '' ? documents :
      documents.filter((doc) => {
        return doc.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
          doc.text.toLowerCase().includes(this.state.searchText.toLowerCase())
      })
    return(
      <div className="left_panel-list">
        {
         filteredDocuments.map(doc => {
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
       <Input
          className="document-search" 
          name="search" 
          value={this.state.searchText} 
          type="text"
          placeholder="Search a document" 
          onChange={this.handleSearch}
        />
        <Button
          className="top_content__button" 
          onClick={this.props.changeToAddMode}
          imgSrc={AddIcon}
          imgClass='button'
        />
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
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanel)
