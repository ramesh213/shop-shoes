import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = ({ handlePopUp }) => {
  return (
    <header className="padding-x py-4 z-20 w-full top-0 sticky bg-indigo-300">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          {" "}
          <img src={headerLogo} alt="logo" width={120} height={29} />
        </a>
        <ul className=" flex  items-center justify-center gap-12 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-sm text-gray-600 hover:text-white font-semibold uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={handlePopUp}
            className="flex justify-center mt-1 items-center bg-gray-200 text-lg p-1 text-dark px-5 hover:scale-105 duration-300"
          >
            Register | log in
          </button>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburgur" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
