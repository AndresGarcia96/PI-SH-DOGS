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
import { useHistory } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const breeds = useSelector((state) => state.breeds);
  const loading = useSelector((state) => state.loadingBreeds);

  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    dispatch(findBreeds());
    dispatch(getAllTemperaments());
    dispatch(clearFilters());
    dispatch(clearSearch());
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <Header onReload={handleReload} />
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="filtersAndSorting">
        <Filters />
        <Sorting />
      </div>

      <button className="create-newdog" onClick={() => history.push("/create")}>
        Created New Dog
      </button>

      <div className="dogs-list">
        <div className="loading">{loading && <h2>Loading...</h2>}</div>

        <div className="dog-notfound">
          {!loading && breeds.length === 0 && (
            <h2>No dog found with the entered name</h2>
          )}
        </div>

        {!loading && breeds.length > 0 && <DogsList key={reload} />}
      </div>
    </div>
  );
};

export default HomePage;
