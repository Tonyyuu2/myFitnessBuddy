import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-screen h-1/4 bg-blue-900 p-5 text-white flex justify-between shadow-xl">
      <div>
        <Link to='/'>
          <h1>myFitnessBuddy</h1>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
