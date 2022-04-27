import React from "react";

import DesktopContent from './DesktopContent/DesktopContent.jsx'
import MobileContent from './MobileContent/MobileContent.jsx'

export const AboutMe = () => {
  return (
    <div className="w-screen min-h-[85vh] bg-[#fcbfb5] py-4">
      <DesktopContent className="hidden lg:grid"/>
      <MobileContent className="grid lg:hidden" />
    </div>
  );
};

export default AboutMe;
