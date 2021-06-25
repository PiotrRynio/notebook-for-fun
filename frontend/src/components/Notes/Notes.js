import React, { useState } from 'react';
import './Notes.css';
import { Note } from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';
import { EditNote } from './EditNote/EditNote';

export function Notes() {
  const startingNotesBD = [
    {
      id: '2323',
      title: 'Wykąpać psa',
      body: 'Pamiętać o nim i użyć szamponu',
    },
    {
      id: '4555',
      title: 'Zrobić zakupy',
      body: 'mleko, jajka, chleb',
    },
  ];

  const [notes, setNotes] = useState(startingNotesBD);
  const [editNote, setEditNote] = useState({});
  const [isEditFormOpened, setIsEditFormOpened] = useState(false);

  const deleteNote = (id) => setNotes([...notes].filter((note) => id !== note.id));
  const addNote = (note) => setNotes([...notes].concat(note));

  const onEditNote = (note) => {
    console.log(note);
    const returnedNotes = [...notes];
    const editNoteIndex = returnedNotes.findIndex(({ id }) => id === note.id);
    console.log(editNoteIndex);
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

      <Modal isOpen={isEditFormOpened} contentLabel={'Edytuj notatkę'}>
        <EditNote
          title={editNote.title}
          body={editNote.body}
          id={editNote.id}
          onEdit={(note) => onEditNote(note)}
        />
        <button onClick={() => toggleEditFormModal()}>Anuluj</button>
      </Modal>

      {notes.map(({ title, body, id }) => (
        <Note
          key={id}
          id={id}
          title={title}
          body={body}
          onEdit={(note) => editNoteHandler(note)}
          onDelete={(id) => deleteNote(id)}
        />
      ))}
    </div>
  );
}
