import React, { useState } from 'react';

export function Note({ body, title, onDelete, id }) {
  const [isShowedDescription, setIsShowedDescription] = useState(false);

  const toggleDescription = () => setIsShowedDescription(!isShowedDescription);

  return (
    <div className="note">
      <p onClick={toggleDescription}>{title}</p>
      {isShowedDescription && <div className="description">{body}</div>}
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