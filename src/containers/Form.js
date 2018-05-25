import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { isEmpty } from 'lodash'

import { 
  createDocument,
  updateDocument,
  removeDocument,
  changeTitleInput,
  changeTextInput,
} from '../reducers/documents'

import './css/Form.css'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  }

  changeTitleInput = (event) => {
    this.props.changeTitleInput(event.target.value)
  }

  changeTextInput = (event) => {
     this.props.changeTextInput(event.target.value)
  }

  handleSave = () => {
    if(this.props.mode === 'add') {
      this.props.createDocument({
        id: this.props.documents.length,
        title: this.props.titleInput,
        text: this.props.textInput,
      });
    } else {
      this.props.updateDocument({
        id: this.props.selected.id,
        title: this.props.titleInput,
        text: this.props.textInput,
      });
    }
  }

  handleDelete = () => {
    this.props.removeDocument(this.props.selected.id)
  }

  render() {
    const { selected, mode, titleInput, textInput } = this.props
    return (
      <div className="document_editor-form">
        { !isEmpty(selected) || mode === 'add'  ? 
          <div className="editor_form-content">
            {this.rederToolbar()}
            <input name="title" value={titleInput} type="text" placeholder="Title of a document" onChange={this.changeTitleInput} />
            <textarea name="text" value={textInput} rows="6" placeholder="Text of a document" onChange={this.changeTextInput} />
          </div> :
          <div>Please select a document or press add button to add new one</div>
        }
      </div>
    );
  }

  rederToolbar() {
    return(
      <div className="form-toolbar">
        <h2>Notes</h2>
        <div>
          <button disabled={this.props.mode === 'add'} onClick={this.handleDelete}>Del</button>
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  documents: state.documents.list,
  selected: state.documents.selected,
  mode: state.documents.mode,
  titleInput: state.documents.titleInput,
  textInput: state.documents.textInput,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createDocument,
  updateDocument,
  removeDocument,
  changeTitleInput,
  changeTextInput,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
