import React, {useState} from 'react';

function NewNote(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeDescriptionHandler = value => setDescription(value);

  const onAddNote = () => {
    const note = {title, body:description}
    props.onAddNote(note)
    setTitle('');
    setDescription('')
  }

  return (
    <div className="note">
      <label>Tytuł</label>
      <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>

      <label>Opis:</label>
      <input type="text" value={description} onChange={event => onChangeDescriptionHandler(event.target.value)}/>

      <button onClick={onAddNote}>Dodaj notatkę!</button>
    </div>
  );
}

export default NewNote;