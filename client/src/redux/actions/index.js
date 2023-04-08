// Action Types
export const GET_BREEDS = "GET_ALL_BREEDS";
export const GET_BREED_DETAIL = "GET_BREED_DETAIL";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const SORT_BREEDS_BY_NAME = "SORT_BREEDS_BY_NAME";
export const SORT_BREEDS_BY_WEIGHT = "SORT_BREEDS_BY_WEIGHT";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

import axios from "axios";
import { findDogsApi, findDogsDb } from "./aux";

// acción para encontrar razas de perro por su nombre o todos
export const findBreeds = (name) => async (dispatch) => {
  try {
    let res = [];
    if (name) {
      res = await axios.get(`http://localhost:3001/dogs/name?name=${name}`);
    } else {
      res = await axios.get(`http://localhost:3001/dogs`);
    }
    dispatch({ type: GET_BREEDS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// acción para obtener el detalle de una raza de perro en específico
export const getBreedDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/dogs/id/${id}`);
    dispatch({ type: GET_BREED_DETAIL, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// acción para obtener todos los temperamentos de las razas de perros
export const getAllTemperaments = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/dogs/temperaments");
    dispatch({ type: GET_ALL_TEMPERAMENTS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// acción para filtrar los perros por temperamento
export const filterByTemperament = (temperament) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:3001/dogs?temperament=${temperament}`
    );
    dispatch({ type: FILTER_BY_TEMPERAMENT, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

// acción para filtrar por origen, ya sea obtener los perros de la API externa u obtener los perros de la base de datos interna
export const filterByOrigin = (origin) => async (dispatch) => {
  try {
    let dogs;
    if (origin === "api") {
      dogs = await findDogsApi();
    } else if (origin === "db") {
      dogs = await findDogsDb();
    }
    // Filtrar los perros según su origen
    const filteredDogs = dogs.filter((dog) => {
      if (origin === "api") {
        return !dog.createdInDb;
      } else if (origin === "db") {
        return dog.createdInDb;
      }
    });
    dispatch({
      type: FILTER_BY_ORIGIN,
      payload: filteredDogs,
    });
  } catch (error) {
    console.log(error);
  }
};

// acción para ordenar las razas de perros alfabéticamente
export const sortBreedsByName = (order) => async (dispatch, getState) => {
  const breeds = getState().breeds;
  let sortedBreeds = [...breeds];

  if (order === "asc") {
    sortedBreeds.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (order === "desc") {
    sortedBreeds.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }

  dispatch({ type: SORT_BREEDS_BY_NAME, payload: sortedBreeds });
};

// acción para ordenar las razas de perros por peso
export const sortBreedsByWeight = (order) => async (dispatch, getState) => {
  const breeds = getState().breeds;
  let sortedBreeds = [...breeds];

  if (order === "asc") {
    sortedBreeds.sort((a, b) => a.weight - b.weight);
  } else if (order === "desc") {
    sortedBreeds.sort((a, b) => b.weight - a.weight);
  }

  dispatch({ type: SORT_BREEDS_BY_WEIGHT, payload: sortedBreeds });
};

// acción para actualizar el número de página en la paginación
export const changePage = (pageNumber) => async (dispatch) => {
  dispatch({ type: CHANGE_PAGE, payload: pageNumber });
};

// acción para limpiar los filtros de búsqueda
export const clearFilters = () => async (dispatch) => {
  // dispatch({ type: FILTER_BY_TEMPERAMENT_CLEAR, payload: null });
  // dispatch({ type: FILTER_BY_ORIGIN_CLEAR, payload: null });
  dispatch({ type: CLEAR_FILTERS });
};

// acción para limpiar la búsqueda
export const clearSearch = () => async (dispatch) => {
  dispatch({ type: CLEAR_SEARCH });
};
