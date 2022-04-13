import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavMenu from "../../Components/NavMenu/NavMenu.jsx";
import MenuIconOpen from "../../Components/MenuIconOpen/MenuIconOpen.jsx";
import ManuIconClosed from "../../Components/ManuIconClosed/ManuIconClosed.jsx";

export const Navigation = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={`border-b-4 border-solid shadow-md px-8 xl:px-0 ${
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
        <button className="py-2.5 cursor-pointer">
          <MenuIconOpen
            className={`w-[40px] h-[40px] ${isMenuOpen ? "hidden" : "block"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <ManuIconClosed
            className={`w-[40px] h-[40px] ${isMenuOpen ? "block" : "hidden"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </button>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
