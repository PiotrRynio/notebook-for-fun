import React, { useState, useEffect } from 'react';
import './Notes.css';
import { Note } from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';
import { EditNote } from './EditNote/EditNote';
import axios from 'axios';

export function Notes() {
  const startingNotesBD = [];

  const [notes, setNotes] = useState(startingNotesBD);
  const [editNote, setEditNote] = useState({});
  const [isEditFormOpened, setIsEditFormOpened] = useState(false);

  useEffect(() => {
    fetchNotes();
  });

  const deleteNote = (_id) => setNotes([...notes].filter((note) => _id !== note._id));
  const addNote = (note) => setNotes([...notes].concat(note));

  const onEditNote = (note) => {
    console.log(note);
    const returnedNotes = [...notes];
    const editNoteIndex = returnedNotes.findIndex(({ _id }) => _id === note._id);
    console.log(editNoteIndex);
    returnedNotes[editNoteIndex] = note;
    setNotes(returnedNotes);
    toggleEditFormModal();
  };

  const fetchNotes = async () =>
    await axios.get('http://localhost:3001/api/notes').then(({ data }) => setNotes(data));

  const toggleEditFormModal = () => {
    setIsEditFormOpened(!isEditFormOpened);
  };

  const editNoteHandler = (note) => {
    setEditNote(note);
    toggleEditFormModal();
  };

  return (
    <div>
      <p>Moje notatki:</p>

      <NewNote onAddNote={(note) => addNote(note)} />

      <Modal isOpen={isEditFormOpened} contentLabel={'Edytuj notatkę'} ariaHideApp={false}>
        <EditNote
          title={editNote.title}
          body={editNote.body}
          _id={editNote._id}
          onEdit={(note) => onEditNote(note)}
        />
        <button onClick={() => toggleEditFormModal()}>Anuluj</button>
      </Modal>

      {notes.map(({ title, body, _id }) => (
        <Note
          key={_id}
          _id={_id}
          title={title}
          body={body}
          onEdit={(note) => editNoteHandler(note)}
          onDelete={(_id) => deleteNote(_id)}
        />
      ))}
    </div>
  );
}
