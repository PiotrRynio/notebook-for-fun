import React, { useState } from 'react';
import './Notes.css';
import { Note } from './Note/Note';
import NewNote from './NewNote/NewNote';
import Modal from 'react-modal';

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
  const [isEditFormOpened, setIsEditFormOpened] = useState(true);

  const deleteNote = (id) => setNotes([...notes].filter((note) => id !== note.id));
  const addNote = (note) => setNotes([...notes].concat(note));

  return (
    <div>
      <p>Moje notatki:</p>

      <NewNote onAddNote={(note) => addNote(note)} />

      <Modal isOpen={isEditFormOpened} contentLabel={'Edytuj notatkę'}></Modal>

      {notes.map(({ title, body, id }) => (
        <Note key={id} id={id} title={title} body={body} onDelete={(id) => deleteNote(id)} />
      ))}
    </div>
  );
}
