import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { notes, updateNote } = props;
  const { deleteNote } = context;
  return (

    <div className="col-md-3 card-w  ">
      <div className="card my-3 cdiv">

        <div className="card-body t-color c-div">
          <div className=" d-flex bd-highlight title align-items-center">
            <div
              style={{ height: "50px" }}
              className=" p-2 flex-grow-1 bd-highlight "
            >
              <h5 style={{ width: "100%", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} className="card-title mytextstyle">{notes.title}</h5>
            </div>

            <div className="p-2 bd-highlight">
              <button onClick={() => { deleteNote(notes._id); }}>
                <i className="fi fi-rr-trash mx-2 glow"></i>
              </button>
            </div>

            <div className="p-2 bd-highlight">
              <button onClick={() => { updateNote(notes); }}>
                <i className="fi fi-rr-file-edit mx-2 glow"></i>
              </button>
            </div>
          </div>
          <div className="px-2">
            <p className="card-text mytextstyle my-3">{notes.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
