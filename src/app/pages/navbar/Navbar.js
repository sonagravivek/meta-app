import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="2xl:container 2xl:mx-auto flex bg-gray-800 py-2">
        <div className="flex mx-4 md:mx-10  xl:mx-12  2xl:container 2xl:mx-auto container">
          <Link to="/" className="text-white animate-bounce font-bold text-xl">
            ALGO
          </Link>

          <div className="flex ml-auto text-end">
            <Link
              to="/"
              className="mx-4 tracking-wider transition-all hover:rounded-md duration-500 hover:tracking-[4px] p-1 text-white hover:text-black hover:bg-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mx-4 tracking-wider transition-all  hover:rounded-md duration-500 hover:tracking-[4px] p-1 text-white hover:text-black hover:bg-white"
            >
              About
            </Link>
            <Link
              to="/help"
              className="mx-4 tracking-wider transition-all hover:rounded-md duration-500 hover:tracking-[4px] p-1 text-white hover:text-black hover:bg-white"
            >
              Help
            </Link>
            <Link
              to="/contact"
              className="mx-4 Ftracking-wider transition-all hover:rounded-md duration-500 hover:tracking-[4px] p-1 text-white hover:text-black hover:bg-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
