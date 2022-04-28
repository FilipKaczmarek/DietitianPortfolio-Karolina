import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UnorderedList from "../UnorderedList/UnorderedList.jsx";

export const MobileMenu = ({ className, itemsHandlerEvent }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <UnorderedList className="w-full h-full flex flex-col justify-center items-center">
        <Link to='/' className="w-full h-[12%] flex justify-center items-center">
          <li onClick={() => itemsHandlerEvent()}>Strona główna</li>
        </Link>
        <Link to='/' className="w-full h-[12%] flex justify-center items-center">
          <li onClick={() => itemsHandlerEvent()}>O mnie</li>
        </Link>
        <Link to='/' className="w-full h-[12%] flex justify-center items-center">
          <li onClick={() => itemsHandlerEvent()}>Oferta</li>
        </Link>
        <Link to='/contactMe' className="w-full h-[12%] flex justify-center items-center">
          <li onClick={() => itemsHandlerEvent()}>Kontakt</li>
        </Link>
      </UnorderedList>
    </div>
  );
};

MobileMenu.propTypes = {
  className: PropTypes.string,
};

export default MobileMenu;