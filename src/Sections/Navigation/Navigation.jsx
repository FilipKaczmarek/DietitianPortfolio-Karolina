import React from "react";
import PropTypes from "prop-types";

import DesktopNavMenu from '../../Components/DesktopNavMenu/DesktopNavMenu.jsx'

export const Navigation = ({ className }) => {
  return (
    <nav className={`border-b-4 border-solid shadow-md ${className ? className : ""}`}>
      <div className="max-w-screen-xl">
        <div>
          <span>Karolina Czajkowska</span>
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
