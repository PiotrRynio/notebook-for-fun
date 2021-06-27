import React, {useState} from 'react';
import {EditNoteType} from './EditNoteType'

export const EditNote = (props:EditNoteType)=> {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.body);

  const onChangeDescriptionHandler = (value:string) => setDescription(value);

  const onEditNote = () => {
    const note = {_id:props._id, title, body: description}
    props.onEdit(note)
    setTitle('');
    setDescription('')
  }

  return (
       <div className="note">
        <label>Tytuł</label>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>

        <label>Opis:</label>
        <input type="text" value={description} onChange={event => onChangeDescriptionHandler(event.target.value)}/>

        <button onClick={onEditNote}>Zapisz</button>
      </div>
  );
}