import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-1">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand m-auto">
          <span className="text-info">React</span> Redux Crud System
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
