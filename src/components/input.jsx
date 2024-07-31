import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeValue = (e) => {
    handleChange(e.target.value);
  };

  const handleClick = (e) => {
    console.log("CLICKED");
  };

  return (
    <div>
      <input
        className="border border-gray-400"
        type="text"
        onChange={changeValue}
      />
    </div>
  );
};

export default Input;
