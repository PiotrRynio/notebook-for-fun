import React, { useState, useEffect } from 'react';
import './Notes.css';
import { Note } from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';
import { EditNote } from './EditNote/EditNote';
import axios from '../../common/axios';
import { NOTES_URL_PATH } from '../../common/constants/apiPaths';

export function Notes() {
  const startingNotesBD = [];

  const [notes, setNotes] = useState(startingNotesBD);
  const [editNote, setEditNote] = useState({});
  const [isEditFormOpened, setIsEditFormOpened] = useState(false);

  useEffect(() => {
    fetchNotes().then();
  }, [editNote, isEditFormOpened]);

  const fetchNotes = async () => await axios.get(NOTES_URL_PATH).then(({ data }) => setNotes(data));

  const addNote = async (note) =>
    await axios.post(NOTES_URL_PATH, note).then(({ data }) => setNotes([...notes].concat(data)));

  const deleteNote = async (_id) => {
    await axios.delete(NOTES_URL_PATH + '/' + _id);
    setNotes([...notes].filter((note) => _id !== note._id));
  };

  const onEditNote = async (note) => {
    await axios.put(NOTES_URL_PATH + '/' + note._id, { note });
    const returnedNotes = [...notes];
    const editNoteIndex = returnedNotes.findIndex(({ _id }) => _id === note._id);
    returnedNotes[editNoteIndex] = note;
    setNotes(returnedNotes);
    toggleEditFormModal();
  };

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
