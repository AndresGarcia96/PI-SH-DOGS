import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DogCard from "../dogCard/DogCard";
import Pagination from "../pagination/Pagination";
import "./dogsList.css";

const DogsList = () => {
  const breeds = useSelector((state) => state.breeds);

  const currentPage = useSelector((state) => state.currentPage);
  const breedsPerPage = useSelector((state) => state.breedsPerPage);

  const selectedOrigin = useSelector((state) => state.selectedOrigin);
  const selectedTemperament = useSelector((state) => state.selectedTemperament);

  const sortOrder = useSelector((state) => state.sortOrder);

  const [computedBreeds, setComputedBreeds] = useState([]);

  const paginate = (breedsList) => {
    return breedsList.slice(
      (currentPage - 1) * breedsPerPage,
      currentPage * breedsPerPage
    );
  };

  useEffect(() => {
    let temporalBreeds = breeds;

    if (selectedOrigin) {
      temporalBreeds = temporalBreeds.filter(
        (b) => b.source === selectedOrigin
      );
    }

    if (selectedTemperament) {
      temporalBreeds = temporalBreeds.filter((b) =>
        b.temperaments?.some((t) => t === selectedTemperament)
      );
    }

    if (sortOrder) {
      if (sortOrder === "ascName") {
        temporalBreeds.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "descName") {
        temporalBreeds.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (sortOrder === "ascWeight") {
        temporalBreeds.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
      } else if (sortOrder === "descWeight") {
        temporalBreeds.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
      }
    }

    setComputedBreeds(temporalBreeds);

    return () => {
      setComputedBreeds(breeds);
    };
  }, [selectedOrigin, selectedTemperament, breeds, sortOrder]);

  return (
    <div className="dogsList">
      <div className="pagination">
        <Pagination total={computedBreeds.length} />
      </div>

      <div className="dogCardAllDogs">
        {paginate(computedBreeds).map((breed) => (
          <DogCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default DogsList;
