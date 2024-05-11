import React from "react";

const CitiesInput = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export default CitiesInput;
