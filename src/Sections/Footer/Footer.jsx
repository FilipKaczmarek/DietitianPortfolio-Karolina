import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="w-screen h-[200px] relative">
      <img
        className="w-screen h-[200px] absolute inset-0 object-cover"
        src="./images/footer.jpg"
        alt=""
      />
      <div className="w-screen h-[200px] bg-[#0000005e] absolute inset-0"></div>
      <div className="footerContentBox w-[70%] h-[200px] z-40 flex flex-col justify-center items-center text-white">
        <div className="flex w-full justify-center items-center my-3">
          <a href="/" className="px-4">
            <FontAwesomeIcon icon={faFacebook} className={"text-4xl"} />
          </a>
          <a href="/" className="px-4">
            <FontAwesomeIcon icon={faInstagram} className={"text-4xl"} />
          </a>
        </div>
        <div>
          <span>Copyright &copy; 2022 by Filip Kaczmarek</span>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
