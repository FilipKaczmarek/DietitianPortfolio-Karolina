import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UnorderedList from "../UnorderedList/UnorderedList.jsx";

export const MobileMenu = ({ className }) => {
  return (
    <div className={`w-screen h-[100hv] ${className ? className : ""}`}>
      <UnorderedList className="w-full h-full flex flex-column">
        <Link to='/' className="w-full h-1/5">
          <li>Strona główna</li>
        </Link>
        <Link to='/' className="w-full h-1/5">
          <li>O mnie</li>
        </Link>
        <Link to='/' className="w-full h-1/5">
          <li>Oferta</li>
        </Link>
        <Link to='/' className="w-full h-1/5">
          <li>Kontakt</li>
        </Link>
      </UnorderedList>
    </div>
  );
};

MobileMenu.propTypes = {
  className: PropTypes.string,
};

export default MobileMenu;