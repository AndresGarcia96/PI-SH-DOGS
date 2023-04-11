import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions/index";
import "./pagination.css";

const Pagination = ({ total }) => {
  const dispatch = useDispatch();

  const breedsPerPage = useSelector((state) => state.breedsPerPage);
  const currentPage = useSelector((state) => state.currentPage);

  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    setShowPrevButton(currentPage > 1);
    setShowNextButton(currentPage < Math.ceil(total / breedsPerPage));
  }, [currentPage, total, breedsPerPage]);

  const handleClick = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const handlePrevClick = () => {
    dispatch(changePage(currentPage - 1));
  };

  const handleNextClick = () => {
    dispatch(changePage(currentPage + 1));
  };

  return (
    <nav className="pagination-bar">
      <div className="pagination">
        <button
          disabled={!showPrevButton}
          onClick={handlePrevClick}
          className="page-button"
        >
          Prev
        </button>

        {Array.from(Array(Math.ceil(total / breedsPerPage)).keys()).map(
          (number) => (
            <button
              key={number}
              onClick={() => handleClick(number + 1)}
              className={`page-button ${
                currentPage === number + 1 ? "active" : ""
              }`}
            >
              {number + 1}
            </button>
          )
        )}

        <button
          disabled={!showNextButton}
          onClick={handleNextClick}
          className="page-button"
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
