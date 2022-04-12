import React from "react";
import PropTypes from "prop-types";

export const Services = ({ className, title, cardContent, imgSrc, imgAlt }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } w-[320px] min-h-[350px] flex flex-col justify-center items-center rounded-md bg-white drop-shadow-xl hover:drop-shadow-2xl mx-4`}
    >
      <div className="">
        <img className="w-[150px] h-[150px] object-cover rounded-full" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="p-2 text-center">
        <h1 className="font-normal">{title ? title : ""}</h1>
        <p className="font-thin">{cardContent}</p>
      </div>
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  cardContent: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Services;
