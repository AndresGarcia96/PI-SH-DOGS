import React from "react";
import { useDispatch } from "react-redux";
import { sortBreedsByName, sortBreedsByWeight } from "../../redux/actions";

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortByName = () => {
    dispatch(sortBreedsByName());
  };

  const handleSortByWeight = () => {
    dispatch(sortBreedsByWeight());
  };

  return (
    <div className="sorting-container">
      <label className="sorting-label">Sort by:</label>
      <select className="sorting-select" onChange={(e) => e.target.value === "name" ? handleSortByName() : handleSortByWeight()}>
        <option value="">--Select--</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default Sorting;
