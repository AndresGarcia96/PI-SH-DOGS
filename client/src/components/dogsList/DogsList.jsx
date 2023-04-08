import React from "react";
import DogCard from "../dogCard/DogCard";
import Pagination from "../pagination/Pagination";
import { useSelector } from "react-redux";

const DogsList = () => {
  const breeds = useSelector((state) => state.breeds);
  const currentPage = useSelector((state) => state.currentPage);
  const breedsPerPage = useSelector((state) => state.breedsPerPage);

  const paginate = () => {
    return breeds.slice(
      (currentPage - 1) * breedsPerPage,
      currentPage * breedsPerPage
    );
  };

  return (
    <div className="dogslist-container">
      <div className="pagination">
        <Pagination />
      </div>

      <div className="dogcard-container">
        {paginate().map((breed) => (
          <DogCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default DogsList;
