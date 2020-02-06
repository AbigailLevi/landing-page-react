import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">Start Bootstrap</a>
      <form className="form-inline">
        <button type="button" class="btn btn-outline-dark text-light">Home</button>
        <button type="button" class="btn btn-outline-dark text-secondary">About</button>
        <button type="button" class="btn btn-outline-dark text-secondary">Services</button>
        <button type="button" class="btn btn-outline-dark text-secondary">Contact</button>
      </form>
    </nav>
  );
};

export default Navbar;
