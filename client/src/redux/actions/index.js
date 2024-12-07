import axios from "axios";

// Action Types
export const CREATE_NEW_DOG = "CREATE_NEW_DOG";
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
export const LOADING_BREEDS = "LOADING_BREEDS";

// acción para encontrar razas de perro por su nombre o todos
export const findBreeds = (name) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_BREEDS });
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

// acción para crear nueva raza de perro
export const createNewDog = (dogData) => async (dispatch) => {
  try {
    console.log("dogData :>> ", dogData);
    const res = await axios.post(`http://localhost:3001/dogs`, dogData);
    alert("Perro creado correctamente!");
    dispatch({ type: CREATE_NEW_DOG, payload: res.data });
  } catch (error) {
    alert("Error al crear el perro");
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

export const filterByOrigin = (origin) => async (dispatch) => {
  dispatch({ type: FILTER_BY_ORIGIN, payload: origin });
};

export const filterByTemperament = (temperament) => async (dispatch) => {
  dispatch({ type: FILTER_BY_TEMPERAMENT, payload: temperament });
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
