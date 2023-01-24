import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-screen bg-blue-900 p-5 text-white top-0 fixed">
      <nav className="flex justify-between shadow-xl ">
        <div>
          <Link to="/">
            <h1>myFitnessBuddy</h1>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
