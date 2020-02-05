import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Start Bootstrap</span>
          <div className="row cols-4">
            <div className="col">Home</div>
            <div className="col">About</div>
            <div className="col">Services</div>
            <div className="col">Contact</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
