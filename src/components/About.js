import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";


const About = () => {

  const navigate = useNavigate();
  const context = useContext(noteContext);

  const { notes, getNotes, editNote } = context;
  const [ note, setNote ] = useState({ id: "", etitle: "", edescription: "", etag: "", });

  const ref = useRef(null);
  const refC = useRef(null);

  useEffect(() => {

    if (localStorage.getItem('token')) {

      getNotes();
    }
    else {
      navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, []);


  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refC.current.click();

  };

  const onChange = (e) => {
    setNote({ ...note, [ e.target.name ]: e.target.value });
  };


  const updateNote = (currNote) => {
    ref.current.click();
    setNote({ id: currNote._id, etitle: currNote.title, edescription: currNote.description, etag: currNote.tag });
  };

  return (
    <>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>

                <div className="form-group my-2">
                  <label className="headings" htmlFor="title"> Title </label>
                  <input name="etitle" value={note.etitle} onChange={onChange} type="text" className="form-control" id="etitle" aria-describedby="emailHelp" />
                </div>

                <div className="form-group my-2">
                  <label className="headings" htmlFor="description">  Description </label>
                  <input onChange={onChange} value={note.edescription} type="text" className="form-control" id="edescription" name="edescription" />
                </div>

                <div className="form-group my-2">
                  <label className="headings" htmlFor="tag"> Tag </label>
                  <input onChange={onChange} value={note.etag} type="text" className="form-control" id="etag" name="etag" />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refC} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2 className="mytextstyle my-3 title">Your Notes</h2>
        {
          notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} notes={note} />;
          })
        }
      </div>
    </>
  );
};

export default About;
