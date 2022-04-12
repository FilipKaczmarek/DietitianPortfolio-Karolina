import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa8 } from "@fortawesome/free-solid-svg-icons";

import './Footer.css'

export const Footer = () => {
  return (
    <div className="w-screen h-[200px] relative">
      <img
        className="w-screen h-[200px] absolute inset-0 object-cover"
        src="./images/footer.jpg"
        alt=""
      />
      <div className="w-screen h-[200px] bg-[#0000005e] absolute inset-0"></div>
      <div className="footerContentBox w-[70%] h-[200px] z-40 flex justify-evenly items-center">
        <a href="/">
          <FontAwesomeIcon icon={fa8} className={"text-8xl"} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={fa8} className={"text-8xl"} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={fa8} className={"text-8xl"} />
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
