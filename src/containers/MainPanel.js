import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'

import { isEmpty } from 'lodash'

import { 
  createDocument,
  updateDocument,
  removeDocument,
  changeTitleInput,
  changeTextInput,
} from '../reducers/documents'

import DelIcon from '../assets/images/delete.png'
import SaveIcon from '../assets/images/pencil.png'

import './css/Form.css'

class MainPanel extends Component {

  changeTitleInput = (event) => {
    this.props.changeTitleInput(event.target.value)
  }

  changeTextInput = (event) => {
     this.props.changeTextInput(event.target.value)
  }

  handleSave = () => {
    if (this.props.titleInput.length > 1) {
      if(this.props.mode === 'add') {
        this.props.createDocument({
          id: new Date().getTime(),
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
            {this.renderToolbar()}
            <Input
              className="editor_form-content__input" 
              name="title" 
              value={titleInput} 
              type="text" 
              placeholder="Title of a document" 
              onChange={this.changeTitleInput}
            />
            <TextArea 
              className="editor_form-content__input" 
              name="text" 
              value={textInput} 
              rows="6" 
              placeholder="Text of a document" 
              onChange={this.changeTextInput}
            />
          </div> :
          <div className="editor_form-content__info">
            Please select a document or press add button to add new one.
          </div>
        }
      </div>
    );
  }

  renderToolbar() {
    return(
      <div className="form-toolbar">
        <h2>Notes</h2>
        <div>
          <Button
            className="form-toolbar__button" 
            disabled={this.props.mode === 'add'} 
            onClick={this.handleDelete}
            imgSrc={DelIcon}
          />
          <Button
            className="form-toolbar__button" 
            onClick={this.handleSave}
            imgSrc={SaveIcon}
          />
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
)(MainPanel)
