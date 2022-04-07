import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import DesktopNavMenu from '../../Components/DesktopNavMenu/DesktopNavMenu.jsx'

export const Navigation = ({ className }) => {
  return (
    <nav className={`border-b-4 border-solid shadow-md ${className ? className : ""}`}>
      <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center">
        <div className="py-5">
          <span className="italic cursor-pointer">Karolina Czajkowska</span>
          {/* <Link to='/'></Link> */}
        </div>
        <DesktopNavMenu />
        <div>
            Icon
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
    className: PropTypes.string,
};

export default Navigation;
