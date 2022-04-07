import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UnorderedList from "../UnorderedList/UnorderedList.jsx";

export const DesktopNavMenu = ({ className }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <UnorderedList>
        {/* <Link to='/'>
          <li>Strona główna</li>
        </Link>
        <Link to='/about'>
          <li>O mnie</li>
        </Link>
        <Link>
          <li>Oferta</li>
        </Link>
        <Link>
          <li>Oferta</li>
        </Link> */}
      </UnorderedList>
    </div>
  );
};

DesktopNavMenu.propTypes = {
  className: PropTypes.string,
};

export default DesktopNavMenu;
