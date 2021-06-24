import React, { useState } from "react";
import "./Notes.css";
import { Note } from "./Note/Note";

export function Notes() {
  const notes = [
    {
      id: "2323",
      title: "Wykąpać psa",
      body: "Pamiętać o nim i użyć szamponu",
    },
    {
      id: "4555",
      title: "Zrobić zakupy",
      body: "mleko, jajka, chleb",
    },
  ];

  const [notesState, setNotesState] = useState(notes);

  const deleteNote = (id) =>
    setNotesState([...notesState].filter((note) => id !== note.id));

  return (
    <div>
      <p>Moje notatki:</p>
      {notesState.map(({ title, body, id }) => (
        <Note
          key={id}
          id={id}
          title={title}
          body={body}
          onDelete={(id) => deleteNote(id)}
        />
      ))}
    </div>
  );
}
