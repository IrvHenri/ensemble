import React from "react";

const Searchbar = ({ setSearchQuery, searchQuery }) => {
  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <input
      className="search-bar"
      value={searchQuery}
      onChange={onChangeHandler}
      placeholder="Search Titles"
    ></input>
  );
};

export default Searchbar;
