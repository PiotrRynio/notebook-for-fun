import React, {useState} from 'react';

function NewNote(props) {

  const [isShowingForm, setIsShowingForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeDescriptionHandler = value => setDescription(value);

  const onAddNote = () => {
    const note = {title, body: description}
    props.onAddNote(note)
    setTitle('');
    setDescription('')
    setIsShowingForm(false)
  }

  return (
    isShowingForm ?
     ( <div className="note">
        <label>Tytuł</label>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)}/>

        <label>Opis:</label>
        <input type="text" value={description} onChange={event => onChangeDescriptionHandler(event.target.value)}/>

        <button onClick={onAddNote}>Dodaj notatkę!</button>
      </div>)
      :
      <button onClick={()=>setIsShowingForm(true)}>Nowa notatka</button>

  );
}

export default NewNote;