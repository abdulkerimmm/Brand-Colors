import React from "react";
import { GrSearch } from "react-icons/gr";
const Search = ({ setSearch }) => {
  return (
    <>
      <div className="icon">
        <GrSearch />
      </div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder=" Search Brand"
      />
    </>
  );
};

export default Search;
