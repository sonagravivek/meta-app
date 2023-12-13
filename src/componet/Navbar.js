import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {" "}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link to="/" className="text-white font-bold text-xl">
            Your Logo
          </Link>
          <div className="flex">
            <Link to="/" className="text-white mx-4">
              Home
            </Link>
            <Link to="/about" className="text-white mx-4">
              About
            </Link>
            <Link to="/contact" className="text-white mx-4">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
