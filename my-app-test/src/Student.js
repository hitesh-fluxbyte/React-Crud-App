import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  return <h1 className="App">{props.name}</h1>;
};

Student.prototype = {
  name: PropTypes.string.isRequired,
};
Student.defaultProps = {
  name: "Information Technologies",
};
export default Student;
