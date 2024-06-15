import React, { useEffect } from "react";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom";

const Notes = () => {

  const navigate = useNavigate();

  useEffect(() => {

    if (localStorage.getItem('token')) { }
    else {
      navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, []);

  return (

    <AddNotes />

  );
};

export default Notes;
