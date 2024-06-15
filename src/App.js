import { Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Toaster } from "react-hot-toast";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <NoteState>
      <div>
        <NavBar />
        <Toaster position="top-center" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </NoteState>
  );
};

export default App;
