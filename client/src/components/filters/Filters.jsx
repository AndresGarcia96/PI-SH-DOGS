import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByTemperament,
  filterByOrigin,
  clearFilters,
} from "../../redux/actions/index";

const Filters = () => {
  const dispatch = useDispatch();
  const [temperament, setTemperament] = useState("");
  const [origin, setOrigin] = useState("");
  const breeds = useSelector((state) => state.breeds);

  const handleTemperamentChange = (event) => {
    setTemperament(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleFilterByTemperament = (event) => {
    event.preventDefault();
    dispatch(filterByTemperament(temperament));
    setTemperament("");
  };

  const handleFilterByOrigin = (event) => {
    event.preventDefault();
    dispatch(filterByOrigin(origin));
    setOrigin("");
  };

  const handleClearFilters = (event) => {
    event.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <div className="filters">
      <form onSubmit={handleFilterByTemperament}>
        <label htmlFor="temperament">Filter by temperament:</label>
        <input
          type="text"
          id="temperament"
          value={temperament}
          onChange={handleTemperamentChange}
        />
        <button type="submit">Apply</button>
      </form>
      <form onSubmit={handleFilterByOrigin}>
        <label htmlFor="origin">Filter by origin:</label>
        <select id="origin" value={origin} onChange={handleOriginChange}>
          <option value="">Select an option</option>
          <option value="api">API</option>
          <option value="db">Database</option>
        </select>
        <button type="submit">Apply</button>
      </form>
      {/* <button onClick={handleClearFilters}>Clear filters</button> */}
      {breeds.length > 0 && (
        <button onClick={handleClearFilters}>Clear Filters</button>
      )}
    </div>
  );
};

export default Filters;
