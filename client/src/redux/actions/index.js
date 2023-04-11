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
    // Obtener todas las razas de perros
    const resBreeds = await axios.get("http://localhost:3001/dogs");
    const allBreeds = resBreeds.data;

    // Obtener todos los temperamentos
    const resTemperaments = await axios.get(
      "http://localhost:3001/dogs/temperaments"
    );
    const allTemperaments = resTemperaments.data.map((temp) => temp.name);

    // Comprobar si el temperamento existe
    if (allTemperaments.includes(temperament)) {
      // Filtrar los perros que tienen ese temperamento
      const filteredDogs = allBreeds.filter((breed) =>
        breed.temperaments?.includes(temperament)
      );
      dispatch({ type: FILTER_BY_TEMPERAMENT, payload: filteredDogs });
    } else {
      console.error(`Temperamento ${temperament} no encontrado.`);
    }
  } catch (error) {
    console.error(error);
  }
};

// acción para filtrar por origen, ya sea obtener los perros de la API externa u obtener los perros de la base de datos interna
export const filterByOrigin = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/dogs`);
    dispatch({
      type: FILTER_BY_ORIGIN,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// acción para ordenar las razas de perros alfabéticamente
export const sortBreedsByName = (order) => async (dispatch) => {
  dispatch({ type: SORT_BREEDS_BY_NAME, payload: order });
};

// acción para ordenar las razas de perros por peso
export const sortBreedsByWeight = (order) => async (dispatch) => {
  dispatch({ type: SORT_BREEDS_BY_WEIGHT, payload: order });
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
