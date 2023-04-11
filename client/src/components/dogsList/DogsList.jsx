import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DogCard from "../dogCard/DogCard";
import Pagination from "../pagination/Pagination";

const DogsList = () => {
  const breeds = useSelector((state) => state.breeds);
  const currentPage = useSelector((state) => state.currentPage);
  const breedsPerPage = useSelector((state) => state.breedsPerPage);
  const filterOrigin = useSelector((state) => state.filteredByOrigin);
  const filterTemperament = useSelector((state) => state.filteredByTemperament);

  const paginate = (breedsList) => {
    return breedsList.slice(
      (currentPage - 1) * breedsPerPage,
      currentPage * breedsPerPage
    );
  };

  return (
    <div className="dogslist">
      <div className="pagination">
        <Pagination />
      </div>

      <div className="dogcardAllDogs">
        {filterOrigin.length === 0 &&
          filterTemperament.length === 0 &&
          paginate(breeds).map((breed) => (
            <DogCard key={breed.id} breed={breed} />
          ))}
      </div>

      <div className="dogcardFilterApi">
        {filterOrigin.length > 0 &&
          filterTemperament >= 0 &&
          paginate(filterOrigin).map((breed) => (
            <DogCard key={breed.id} breed={breed} />
          ))}
      </div>

      <div className="dogcardFilterTemperament">
        {filterTemperament.length > 0 &&
          filterOrigin.length >= 0 &&
          paginate(filterTemperament).map((breed) => (
            <DogCard key={breed.id} breed={breed} />
          ))}
      </div>
    </div>
  );
};

export default DogsList;
