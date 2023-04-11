import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions/index";
import "./pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();

  const breedsPerPage = useSelector((state) => state.breedsPerPage);
  const breeds = useSelector((state) => state.breeds);
  const filterOrigin = useSelector((state) => state.filteredByOrigin);
  const filterTemperament = useSelector((state) => state.filteredByTemperament);

  const [pageNumbers, setPageNumbers] = useState([]);

  const handleClick = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  useEffect(() => {
    const allFilteredBreeds =
      filterOrigin.length > 0 || filterTemperament.length > 0
        ? [...filterOrigin, ...filterTemperament]
        : breeds;

    setPageNumbers(
      Array.from(
        Array(Math.ceil(allFilteredBreeds.length / breedsPerPage)).keys()
      )
    );
  }, [breeds, filterOrigin, filterTemperament, breedsPerPage]);

  return (
    <nav className="pagination-bar">
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number + 1)}
            className="page-button"
          >
            {number + 1}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
