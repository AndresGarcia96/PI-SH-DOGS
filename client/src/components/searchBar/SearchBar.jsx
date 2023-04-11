import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findBreeds } from "../../redux/actions";
import "./searchBar.css";

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
    console.log(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        className="input-search"
        type="text"
        placeholder="Search by breed name..."
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

      <button type="search" className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
