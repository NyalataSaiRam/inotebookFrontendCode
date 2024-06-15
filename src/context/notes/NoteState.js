import { useState } from 'react';
import NoteContext from './noteContext';
import toast from 'react-hot-toast';

const NoteState = (props) => {

  const host = "https://inotebook-website-server.onrender.com";

  const initialNotes = [];

  const [ notes, setNotes ] = useState(initialNotes);

  //Add Note

  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    }
    );

    const json = await response.json();
    setNotes(json);




  };
  const addNote = async (title, description, tag) => {


    if (title.length < 3 || title.length > 12) {
      toast.error("Title should be in range 3-12 characters");
      return;
    }

    if (description.length < 6) {
      toast.error("Description should be atleast 6 characters long");
      return;
    }

    if (tag.length < 3) {
      toast.error("Tag should be atleast 3 characters long");
      return;
    }


    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note));

    toast.success("Adding a new note is successfull");




  };


  //Delete Note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    toast.success(json.success);


    const newNotes = notes.filter((note) => { return note._id !== id; });
    setNotes(newNotes);


  };

  //Edit Note
  const editNote = async (id, title, description, tag) => {

    if (title.length < 3 || title.length > 12) {
      toast.error("Title should be in range 3-12 characters");
      return;
    }

    if (description.length < 6) {
      toast.error("Description should be atleast 6 characters long");
      return;
    }

    if (tag.length < 3) {
      toast.error("Tag should be atleast 3 characters long");
      return;
    }

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();


    toast.success("Updated Successfully!");



    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[ index ];
      if (element._id == id) {
        newNotes[ index ].title = title;
        newNotes[ index ].description = description;
        newNotes[ index ].tag = tag;
        break;
      }
    }
    setNotes(newNotes);

  };



  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;