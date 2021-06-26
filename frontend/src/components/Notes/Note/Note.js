import React, { useState } from 'react';

export function Note({ body, title, onDelete, _id, onEdit }) {
  const [isShowedDescription, setIsShowedDescription] = useState(false);

  const toggleDescription = () => setIsShowedDescription(!isShowedDescription);

  return (
    <div className="note">
      <p onClick={toggleDescription}>{title}</p>
      {isShowedDescription && <div className="description">{body}</div>}
      <button onClick={() => onEdit({ _id, title, body })}>edytuj</button>
      <button className="delete" onClick={() => onDelete(_id)}>
        usuń
      </button>
    </div>
  );
}
