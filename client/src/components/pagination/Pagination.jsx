import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions/index";

const Pagination = () => {
  const dispatch = useDispatch();

  const breedsPerPage = useSelector((state) => state.breedsPerPage);
  const breeds = useSelector((state) => state.breeds);

  const [pageNumbers, setPageNumbers] = useState([]);

  const handleClick = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  useEffect(() => {
    setPageNumbers(
      Array.from(Array(Math.ceil(breeds.length / breedsPerPage)).keys())
    );
  }, [breeds]);

  return (
    <nav>
      <div className="flex-container">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number + 1)}
            className="page-link"
          >
            {number + 1}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
