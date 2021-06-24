import React from "react";

export function Note({ body, title, onDelete, id }) {
  return (
    <div className="note">
      <p>{title}</p>
      <div className="description">{body}</div>
      <button>edytuj</button>
      <button
        className="delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        usuń
      </button>
    </div>
  );
}
