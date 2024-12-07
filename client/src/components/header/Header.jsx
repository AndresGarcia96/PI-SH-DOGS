import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/favicon2.png";
import "./header.css";
import {
  findBreeds,
  getAllTemperaments,
  clearFilters,
  clearSearch,
} from "../../redux/actions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(findBreeds());
    history.push("/home");
    window.location.reload();
    dispatch(getAllTemperaments());
    dispatch(clearFilters());
    dispatch(clearSearch());
  };

  const handleExit = () => {
    history.push("/");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/home" onClick={handleHome}>
            <img src={logo} alt="Dog App Logo" />
          </Link>
          <h1>Henry Dogs Store</h1>
        </div>
        <div className="header-right">
          <button onClick={handleHome} className="button_home">
            Home
          </button>
          <button onClick={handleExit} className="button_exit">
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
