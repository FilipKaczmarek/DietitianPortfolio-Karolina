import React from "react";
import PropTypes from "prop-types";

export const UnorderedList = ({ className, children }) => {
  return <ul className={`${className ? className : ""}`}>{children}</ul>;
};

UnorderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default UnorderedList;
