import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import HomePage from "./components/homePage/HomePage";
import DogDetail from "./components/dogDetail/DogDetail";
import SearchBar from "./components/searchBar/SearchBar";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/dogs/:id" component={DogDetail} />
    </BrowserRouter>
  );
}

export default App;
