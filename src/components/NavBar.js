import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");

  };



  return (

    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#ebecfe" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> iNotebook </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link {`location === '/'? 'active' :''`}" aria-current="page" to="/" >Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link {`location === '/'? 'active':''`}" to="/about">My Notes</Link>
            </li>

          </ul>
          {
            //checking whether token exisits, if not  then show login button else logout button
            (!localStorage.getItem("token")) ?
              <form className="d-flex">
                <Link className="btn btn-outline-primary mx-1" to={'/sign-in'} role="button">Sign In</Link>
                <Link className="btn btn-outline-primary mx-1" to={'/sign-up'} role="button">Sign Up</Link>
              </form>
              :
              <form className="d-flex">
                <button onClick={handleSignOut} className="btn btn-outline-primary mx-1">Sign Out</button>
              </form>
          }

        </div>
      </div>
    </nav>


  );
};

export default NavBar;
