import React, {useState} from 'react';

export const EditNote = (props)=> {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.body);

  const onChangeDescriptionHandler = value => setDescription(value);

  const onEditNote = () => {
    const note = {id:props.id, title, body: description}
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