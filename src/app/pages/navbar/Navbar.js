import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className= " flex bg-gray-800 p-4">
        <div className=" flex container mx-auto">
          <Link to="/" className="text-white font-bold text-xl">
            ALgo
          </Link>
          <div className="flex ml-auto text-end">
            <Link to="/" className="text-white mx-4">
              Home
            </Link>
            <Link to="/about" className="text-white mx-4">
              About
            </Link>
            <Link to="/help" className="text-white mx-4">
              Help
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
