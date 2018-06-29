import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import NewNoteComponent from '../NewNoteComponent/NewNoteComponent';

import './NotesComponent.css';
import add from '../../images/add.svg';
import hide from '../../images/hide.svg';
import del from '../../images/rubbish-bin.svg';
import save from '../../images/save.svg';
import saveChanged from '../../images/save-changed.svg';

const notesSeed = [
  {
    title: 'Note one',
    body: 'This is the note one.',
    id: '1'
  },
  {
    title: 'Note two',
    body: 'This is the note two.',
    id: '2'
  },
  {
    title: 'Burek',
    body: 'This is the note three.',
    id: '3'
  },
];

class NotesComponent extends Component {
  constructor () {
    super ();
    this.state = {
      query: '',
      form: false,
      title:'',
      body:'',
      notes: notesSeed,
      selected: null,
      edit: false,
      changed: false
    }
  }

  handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    
    if ( this.state[name] !== value) {
      this.setState({changed: true});
    } else {
      this.setState({changed: false});
    }
    this.setState({
      [name]: value
    });
  }

  saveNote = () => {
    if (this.state.edit) {
      const note = this.state.notes.filter(n => n.id === this.state.selected.id)
      const index = this.state.notes.indexOf(note[0]);
      const newNote = {
          title: this.state.title || this.state.selected.title,
          body: this.state.body || this.state.selected.body,
          id: note[0].id
      };
      let editedNotes = this.state.notes;
      editedNotes[index] = newNote;

      this.setState({
        notes: editedNotes,
        selected: null,
        title: '',
        body: '',
        form: false,
        changed: false
      });
    } else {
      const randomId = Math.random().toString(36).substring(7);
      const note = {
          title: this.state.title,
          body: this.state.body,
          id: randomId
      };

      this.setState({
        notes: [...this.state.notes, note],
        selected: null,
        form: false,
        body: '',
        title: '',
        changed: false,
        edit: false
      });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value.toLowerCase()
    });
  }

  handleDelete = () => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      const note = this.state.notes.filter(n => n.id === this.state.selected.id)
      const index = this.state.notes.indexOf(note[0]);
      const trimmedNotes = [].concat(this.state.notes)
      trimmedNotes.splice(index, 1);
      this.setState({notes: trimmedNotes, selected: null});
    }
    return false;
  }

  toggleForm = () => {
    this.setState((prevState, currentProps) => {
      return {
        form: !prevState.form,
        edit: false,
        selected: null
      }
    });
  }

  selectNote = (e, item) => {
    this.setState((prevState, currentProps)=> {
      return {
        selected: item,
        edit: !prevState.edit
      }
    });
  }

  isFiltered = (item) => {
    return item.title.toLowerCase().includes(this.state.query) ||
          item.body.toLowerCase().includes(this.state.query);
  }

  renderNotes = () => {
    return this.state.notes.map((item, index) => {
      if(this.isFiltered(item)) {
        return (
          <ListComponent
            key={item.id}
            item={item}
            clicked={(e) => this.selectNote(e, item)}
            selected={(this.state.edit && this.state.selected === item) ? true : false}
          />
        );
      } else {
        return false;
      }
    });
  }

  render() {
    return (
      <div className='notes-component-container'>
        <div>
          <div className='notes-search-container'>
            <SearchComponent
              placeholder='Search for...'
              handleChange={this.handleInputChange}
            />
          </div>
          <div className='notes-buttons-container'>
            { !this.state.edit &&
              (<button
                onClick={this.toggleForm}
                className='notes-action-button notes-add-button'>
                  {this.state.form ?
                    <img src={hide} width="27" height="27" alt="minus" /> :
                    <img src={add} width="27" height="27" alt="plus" />}
              </button>)
            }
              <button
                disabled={!this.state.changed}
                onClick={this.saveNote}
                className='notes-action-button notes-edit-button'>
                  {this.state.changed ?
                    <img src={saveChanged} width="27" height="27" alt="changed" /> :
                    <img src={save} width="27" height="27" alt="save" />
                  }
              </button>

            <button
              disabled={!this.state.selected}
              onClick={this.handleDelete}
              className='notes-action-button notes-delete-button'>
                  <img src={del} width="27" height="27" alt="delete" />
            </button>
          </div>
          <div className='notes-list-container'>
            {
              this.renderNotes()
            }
          </div>
        </div>
        <div>
          <h2 className='title'>Notes</h2>
        {
          this.state.form &&
            (<NewNoteComponent
              title={this.state.title}
              body={this.state.body}
              change={this.handleInput}
              changed={this.state.changed}
            />)
        }
        {
          this.state.selected && this.state.edit &&
             (<NewNoteComponent
                title={this.state.title || this.state.selected.title}
                body={this.state.body || this.state.selected.body}
                change={this.handleInput}
                changed={this.state.changed}
              />)
        }
        {
          (!this.state.edit && !this.state.form) &&
            (
              <div className='note-desc'>
                <h5>Please select a document to edit or add a new one.</h5>
              </div>
            )
        }
        </div>
      </div>
    );
  }
}

export default NotesComponent;
