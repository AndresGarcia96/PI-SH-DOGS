import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findBreeds,
  getAllTemperaments,
  filterByTemperament,
  filterByOrigin,
  clearFilters,
} from "../../redux/actions/index";

const Filters = () => {
  const dispatch = useDispatch();
  const [origin, setOrigin] = useState("");
  const [temperament, setTemperament] = useState("");
  const filterOrigin = useSelector((state) => state.filteredByOrigin);
  const filterTemperament = useSelector((state) => state.filteredByTemperament);
  const allTemperaments = useSelector((state) => state.allTemperaments);

  useEffect(() => {
    dispatch(findBreeds());
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleTemperamentChange = (event) => {
    setTemperament(event.target.value);
  };

  const handleFilterByOrigin = (event) => {
    event.preventDefault();
    dispatch(filterByOrigin(origin));
    console.log(filterOrigin);
  };

  const handleFilterByTemperament = (event) => {
    event.preventDefault();
    dispatch(filterByTemperament(temperament));
    console.log(temperament);
    console.log(filterTemperament);
  };

  const handleClearFilters = (event) => {
    event.preventDefault();
    dispatch(clearFilters());
    setOrigin("");
    setTemperament("");
  };

  return (
    <div className="filters">
      <form className="originfilter" onSubmit={handleFilterByOrigin}>
        <label htmlFor="origin">Filter by origin:</label>
        <select id="origin" value={origin} onChange={handleOriginChange}>
          <option value="">Any</option>
          <option value="api">Api</option>
          <option value="db">DataBase</option>
        </select>
        <button
          className="originfilter-button"
          onClick={handleFilterByOrigin}
          type="submit"
        >
          Apply
        </button>
        {origin && (
          <button className="clearfilters-button" onClick={handleClearFilters}>
            Clear Filters
          </button>
        )}
      </form>
      <form className="temperamentfilter" onSubmit={handleFilterByTemperament}>
        <label htmlFor="temperament">Filter by temperament:</label>
        <select
          id="temperament"
          value={temperament}
          onChange={handleTemperamentChange}
        >
          <option value="">All temperaments</option>
          {allTemperaments.map((temp, index) => (
            <option key={index} value={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
        <button
          className="temperamentfilter-button"
          onClick={handleFilterByTemperament}
          type="submit"
        >
          Apply
        </button>
        {temperament && (
          <button className="clearfilters-button" onClick={handleClearFilters}>
            Clear Filters
          </button>
        )}
      </form>
    </div>
  );
};

export default Filters;
