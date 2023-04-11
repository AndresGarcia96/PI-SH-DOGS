import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortBreedsByName, sortBreedsByWeight } from "../../redux/actions";

const Sorting = () => {
  const dispatch = useDispatch();
  const [nameOrder, setNameOrder] = useState("");
  const [weightOrder, setWeightOrder] = useState("");

  const handleNameSort = () => {
    if (nameOrder === "asc" || nameOrder === "") {
      dispatch(sortBreedsByName("desc"));
      setNameOrder("desc");
    } else {
      dispatch(sortBreedsByName("asc"));
      setNameOrder("asc");
    }
    // reset weightOrder to an empty string to avoid conflicting orders
    setWeightOrder("");
  };

  const handleWeightSort = () => {
    if (weightOrder === "asc" || weightOrder === "") {
      dispatch(sortBreedsByWeight("desc"));
      setWeightOrder("desc");
    } else {
      dispatch(sortBreedsByWeight("asc"));
      setWeightOrder("asc");
    }
    // reset nameOrder to an empty string to avoid conflicting orders
    setNameOrder("");
  };

  return (
    <div className="sorting">
      <label>Sort by:</label>
      <button onClick={handleNameSort}>
        Name {nameOrder === "asc" ? "▼" : nameOrder === "desc" ? "▲" : ""}
      </button>
      <button onClick={handleWeightSort}>
        Weight {weightOrder === "asc" ? "▼" : weightOrder === "desc" ? "▲" : ""}
      </button>
    </div>
  );
};

export default Sorting;
