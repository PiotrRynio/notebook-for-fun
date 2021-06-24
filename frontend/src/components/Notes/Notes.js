import React from "react";
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

  return (
    <div>
      <p>Moje notatki:</p>

      {notes.map(({ title, body, id }) => (
        <Note id={id} title={title} body={body} />
      ))}
    </div>
  );
}
