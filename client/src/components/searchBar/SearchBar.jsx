import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findBreeds } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(findBreeds(searchTerm.trim()));
    setSearchTerm("");
  };

  return (
    <div className="searchBar-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
      />

      {searchTerm && (
        <button
          type="reset"
          className="clear-button"
          onClick={() => setSearchTerm("")}
        >
          x
        </button>
      )}

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
