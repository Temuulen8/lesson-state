import React from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState();

  const handleChange = () => {};

  return (
    <div>
      <input
        className="border border-gray-400"
        type=""
        onChange={handleChange}
      />
      <p>search value: {searchValue}</p>
    </div>
  );
};

export default Input;
