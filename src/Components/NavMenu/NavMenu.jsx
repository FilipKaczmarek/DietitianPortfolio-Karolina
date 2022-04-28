import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UnorderedList from "../UnorderedList/UnorderedList.jsx";

export const DesktopNavMenu = ({ className }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <UnorderedList className="flex flex-row">
        <Link to='/' className="md:px-4 lg:px-8">
          <li>Strona główna</li>
        </Link>
        <Link to='/' className="md:px-4 lg:px-8">
          <li>O mnie</li>
        </Link>
        <Link to='/' className="md:px-4 lg:px-8">
          <li>Oferta</li>
        </Link>
        <Link to='/contactMe' className="md:px-4 lg:px-8">
          <li>Kontakt</li>
        </Link>
      </UnorderedList>
    </div>
  );
};

DesktopNavMenu.propTypes = {
  className: PropTypes.string,
};

export default DesktopNavMenu;
