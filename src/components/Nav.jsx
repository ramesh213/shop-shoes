import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { RxCross2 } from "react-icons/rx";
import { RiAccountCircleFill } from "react-icons/ri";

const Nav = ({ handlePopUp }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <header className="padding-x py-4 z-20 w-full top-0 sticky bg-indigo-300">
      <nav className="flex justify-between pb-1 items-center max-container">
        {/* Left Section: Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={headerLogo} alt="logo" width={120} height={29} />
        </a>

        {/* Right Section: Nav Links and Sign Up/Login */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
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

          {/* Sign Up/Login */}
          <div className="flex items-center">
            <p
              onClick={handlePopUp}
              className="text-gray-600 cursor-pointer hover:text-white max-sm:hidden font-montserrat font-semibold mr-8 "
            >
              sign up <span className="text-yellow-800 ">| </span> login
            </p>
            <RiAccountCircleFill
              className="text-2xl text-gray-600  min-[640px]:hidden"
              onClick={handlePopUp}
            />
          </div>
          <div className="hidden items-center max-lg:block  relative">
            {menuToggle ? (
              <div className="absolute right-0 top-0 flex flex-col items-end">
                <RxCross2
                  fontSize={25}
                  onClick={() => setMenuToggle(false)}
                  className="ml-4"
                />
                <ul className=" mt-3  flex flex-col bg-red-300 px-10 py-4 items-center justify-center gap-4">
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
                className="ml-6"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
