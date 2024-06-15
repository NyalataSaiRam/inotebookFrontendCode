import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNotes = () => {

  const context = useContext(noteContext);
  const { addNote } = context;

  const [ note, setNote ] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [ e.target.name ]: e.target.value });
  };

  return (

    <div className="nbody">
      <form >
        <div className="login-div">

          <div className="stitle">iNotebook</div>

          <div className="sub-title"> Add a new note.</div>

          <div className="fields">

            <div className="email">
              <input id='title' value={note.title} name='title' required onChange={onChange} type="text" className="user-input" placeholder='Title' />
            </div>

            <div className="password">
              <input id='description' value={note.description} name='description' required onChange={onChange} type="text" className="user-input" placeholder='Description' />
            </div>

            <div className="password">
              <input id='tag' value={note.tag} name='tag' required onChange={onChange} type="text" className="user-input" placeholder='Tag' />
            </div>

          </div>
          <button onClick={handleClick} type='submit' className="signin-btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
