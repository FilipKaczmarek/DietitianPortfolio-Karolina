import React from "react";
import PropTypes from "prop-types";

export const Services = ({ className, title, cardContent, imgSrc, imgAlt }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } max-w-[300px] h-auto flex flex-col justify-center items-center drop-shadow-lg hover:drop-shadow-2xl`}
    >
      <div className="w-6/12 h-6/12 rounded-full">
        <img className="rounded-full" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="p-2">
        <h1 className="text-lg">{title ? title : ""}</h1>
        <p>{cardContent}</p>
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
