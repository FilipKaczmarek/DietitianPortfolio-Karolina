import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavMenu from "../../Components/NavMenu/NavMenu.jsx";
import MenuIconOpen from "../../Components/MenuIconOpen/MenuIconOpen.jsx";
import ManuIconClosed from "../../Components/ManuIconClosed/ManuIconClosed.jsx";
import MobileMenu from "../../Components/MobileMenu/MobileMenu.jsx";

import "./navigation.css";

export const Navigation = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(true);

  return (
    <nav
      className={`border-b-4 border-solid shadow-md relative${
        className ? className : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center">
        <div className="py-5 flex flex-row justify-between">
          <div>
            <Link to="/">
              <span className="italic cursor-pointer">Karolina Czajkowska</span>
            </Link>
          </div>
        </div>
        <NavMenu className="hidden md:block" />
        <button className="py-2.5 cursor-pointer md:hidden">
          <MenuIconOpen
            className={`w-[40px] h-[40px] ${isMenuOpen ? "hidden" : "block"}`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsMenuClicked(!isMenuClicked);
            }}
          />
          <ManuIconClosed
            className={`w-[40px] h-[40px] ${isMenuOpen ? "block" : "hidden"}`}
            onClick={() => {
              setIsMenuClicked(!isMenuClicked);
              setTimeout(() => setIsMenuOpen(!isMenuOpen), 1300);
            }}
          />
        </button>
      </div>
      {isMenuOpen ? (
        <MobileMenu
          className={`absolute z-40 w-screen bg-white transition-[height] ease-in-out	mobile-menu ${
            isMenuClicked
              ? "animate-hideNavList"
              : "delay-150 animate-showNavList"
          }`}
        />
      ) : null}
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
