import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import NewNoteComponent from '../NewNoteComponent/NewNoteComponent';

import './NotesComponent.css';

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
      this.setState({changed: true });
    } else {
      this.setState({changed: false });
    }
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
      changed: false
    });
  }

  handleEdit = (e) => {
    e.preventDefault();
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
      edit: false,
      form: false,
      changed: false
    });
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
     }
   });
  }

  toggleEdit = (e) => {
    this.setState((prevState, currentProps) => {
     return {
       edit: !prevState.edit
      }
    });
  }

  isFiltered = (item) => {
    return item.title.toLowerCase().includes(this.state.query) ||
    item.body.toLowerCase().includes(this.state.query);
  }

  selectNote = (e, item) => {
    this.setState({ selected: item });
  }

  renderNotes = () => {
    return this.state.notes.map((item, index) => {
      if(this.isFiltered(item)) {
        return (
          <ListComponent
            key={item.id}
            item={item}
            clicked={(e) => this.selectNote(e, item)}
          />
      )} else {
        return false;
      }
    });
  }

  render() {
    return (
      <div className="notes-component-container">
        <div>
          <div className="notes-search-container">
            <SearchComponent
              placeholder="Search for..."
              handleChange={this.handleInputChange}
            />
          </div>
          <div className="notes-buttons-container">
            { !this.state.edit &&
              (<button
                onClick={this.toggleForm}
                className="notes-action-button notes-add-button"
                >
                {this.state.form ? '-' : '+'}
              </button>)
            }
            { !this.state.form &&
              (<button
                  disabled={!this.state.selected}
                  onClick={this.toggleEdit}
                  className="notes-action-button notes-edit-button">
                  Edit
              </button>)
            }
            <button
                disabled={!this.state.selected}
                onClick={this.handleDelete}
                className="notes-action-button notes-delete-button">
                Delete
            </button>
          </div>
          <div className="notes-list-container">
            {
              this.renderNotes()
            }
          </div>
        </div>
        <div>
        {
          this.state.form &&
            (<NewNoteComponent
              title={this.state.title}
              body={this.state.body}
              submit={this.handleSubmit}
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
                submit={this.handleEdit}
              />)
        }
        {
          (!this.state.selected && !this.state.form) &&
            (
              <div>
                <h5>Please Select a document to edit or add a new one.</h5>
              </div>
            )
        }
        </div>
      </div>
    );
  }
}

export default NotesComponent;
