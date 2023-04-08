import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findBreeds,
  getAllTemperaments,
  clearFilters,
  clearSearch,
} from "../../redux/actions/index";
import SearchBar from "../searchBar/SearchBar";
import Header from "../header/Header";
import DogsList from "../dogsList/DogsList";
import Filters from "../filters/Filters";
import Sorting from "../sorting/Sorting";
import Loading from "../loading/Loading";

const HomePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const breeds = useSelector((state) => state.breeds);
  const temperaments = useSelector((state) => state.allTemperaments);
  const currentPage = useSelector((state) => state.currentPage);
  const breedsPerPage = useSelector((state) => state.breedsPerPage);

  useEffect(() => {
    dispatch(findBreeds()).then(() => setLoading(false));
    dispatch(getAllTemperaments());
    dispatch(clearFilters());
    dispatch(clearSearch());
  }, []);

  return (
    <div>
      <div className="home-page">
        <Header />
        <SearchBar />
        <div className="filtersAndSorting-container">
          <div className="filtersAndSorting">
            <Filters temperaments={temperaments} />
            <Sorting />
          </div>
        </div>
        <div className="dogsList-container">
          <div className="loading">{loading && <h2>Loading...</h2>}</div>

          <div className="dogs-notfound">
            {!loading && breeds.length === 0 && (
              <h2>No dog found with the entered name</h2>
            )}
          </div>

          {!loading && breeds.length > 0 && <DogsList />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
