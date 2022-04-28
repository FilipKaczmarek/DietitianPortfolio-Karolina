import React from "react";
import PropTypes from "prop-types";

import './ContactMe.css'

export const ContactMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[calc(100vh_-_268px)] relative flex flex-col justify-center overflow">
      <div className="">
        <h1 className="text-5xl">Skontaktuj się ze mną!</h1>
        <p className="text-base max-w-[50%] my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi facilis aut ea dolorum, soluta dolorem.</p>
        {/* form Component */}
      </div>
      <div className="bg-black max-w-[500px] max-h-[500px] translate--contactInfo">
          <h5>Info</h5>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  );
};

ContactMe.propTypes = {};

export default ContactMe;
