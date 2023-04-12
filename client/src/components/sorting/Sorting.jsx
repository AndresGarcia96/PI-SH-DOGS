import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortBreedsByName, sortBreedsByWeight } from "../../redux/actions";
import "./sorting.css";

const Sorting = () => {
  const dispatch = useDispatch();

  const [nameOrder, setNameOrder] = useState("");
  const [weightOrder, setWeightOrder] = useState("");

  const handleNameSort = () => {
    if (nameOrder === "asc" || nameOrder === "") {
      dispatch(sortBreedsByName("descName"));
      setNameOrder("desc");
    } else {
      dispatch(sortBreedsByName("ascName"));
      setNameOrder("asc");
    }
    setWeightOrder("");
  };

  const handleWeightSort = () => {
    if (weightOrder === "asc" || weightOrder === "") {
      dispatch(sortBreedsByWeight("descWeight"));
      setWeightOrder("desc");
    } else {
      dispatch(sortBreedsByWeight("ascWeight"));
      setWeightOrder("asc");
    }
    setNameOrder("");
  };

  return (
    <div className="sorting">
      <label>Sort by:</label>
      <button className="namesorting-button" onClick={handleNameSort}>
        Name {nameOrder === "desc" ? "▼" : nameOrder === "asc" ? "▲" : ""}
      </button>
      <button className="weightsorting-button" onClick={handleWeightSort}>
        Weight {weightOrder === "desc" ? "▼" : weightOrder === "asc" ? "▲" : ""}
      </button>
    </div>
  );
};

export default Sorting;
