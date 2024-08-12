import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-600 text-white   text-center py-2">
      <nav>
        <ul className="flex justify-end mx-2 px-3 space-x-4 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
