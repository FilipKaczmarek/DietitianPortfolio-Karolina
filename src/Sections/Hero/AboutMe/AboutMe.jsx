import React from "react";
import PropTypes from "prop-types";

import DesktopContent from './DesktopContent/DesktopContent.jsx'

import './AboutMe.css'

export const AboutMe = () => {
  return (
    <div className="w-screen h-[150vh] lg:h-[85vh] lg:min-h-[85vh] bg-[#fcbfb5] py-4">
      <DesktopContent className="hidden lg:grid"/>
    </div>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
