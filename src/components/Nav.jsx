import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { RxCross2 } from "react-icons/rx";

const Nav = ({ handlePopUp }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="padding-x py-4 z-20 w-full top-0 sticky bg-indigo-300">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={120}
            height={29}
          />
        </a>
        <ul className="flex items-center justify-center gap-12 max-lg:hidden">
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
            className="flex justify-center border-none bg-slate-300 items-center max-sm:hidden text-md px-2 py-1 rounded-sm text-dark font-base"
          >
            ACCOUNT
          </button>
        </div>
        <div className="hidden items-center max-lg:block  relative">
          {menuToggle ? (
            <div className="absolute right-0 top-0 flex flex-col items-end">
              <RxCross2
                fontSize={27}
                className="mr-5 pb-2"
                onClick={() => setMenuToggle(false)}
              />
              <ul className="  flex flex-col bg-red-300 px-10 py-4 items-center justify-center gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-base  text-sm text-slate-700 hover:text-red-500  uppercase font-semibold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={hamburger}
              alt="hamburger"
              width={22}
              height={22}
              onClick={() => setMenuToggle(true)}
              className="mr-5"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
