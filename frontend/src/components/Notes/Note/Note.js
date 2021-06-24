import React from "react";

export function Note({ body, title }) {
  return (
    <div className="note">
      <p>{title}</p>
      <div className="description">{body}</div>
      <button>edytuj</button>
      <button className="delete">usuń</button>
    </div>
  );
}
