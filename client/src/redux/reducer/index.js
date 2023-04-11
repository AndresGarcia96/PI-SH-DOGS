import {
  GET_BREEDS,
  GET_BREED_DETAIL,
  GET_ALL_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_ORIGIN,
  SORT_BREEDS_BY_NAME,
  SORT_BREEDS_BY_WEIGHT,
  CHANGE_PAGE,
  CLEAR_SEARCH,
  CLEAR_FILTERS,
} from "../../redux/actions/index";

const initialState = {
  breeds: [],
  breedDetail: {},
  allTemperaments: [],
  filteredByTemperament: [],
  filteredByOrigin: [],
  searchResults: [],
  sortOrder: "",
  currentPage: 1,
  breedsPerPage: 8,
  error: "",
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BREED_DETAIL:
      return {
        ...state,
        breedDetail: action.payload,
        error: "",
      };
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        currentPage: 1,
        breedsPerPage: 8,
        error: "",
      };
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
        error: "",
      };
    case FILTER_BY_TEMPERAMENT:
      return {
        ...state,
        filteredByTemperament: action.payload,
        error: "",
      };
    case FILTER_BY_ORIGIN:
      return {
        ...state,
        filteredByOrigin: action.payload,
        currentPage: 1,
        breedsPerPage: 8,
        error: "",
      };
    case SORT_BREEDS_BY_NAME:
      // obtenemos la copia de las razas actuales
      const breedsByName = [...state.breeds];

      // ordenamos las razas alfabéticamente
      if (action.payload === "asc") {
        breedsByName.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "desc") {
        breedsByName.sort((a, b) => b.name.localeCompare(a.name));
      }

      // actualizamos el estado con las razas ordenadas y el orden actual
      return { ...state, breeds: breedsByName, sortOrder: action.payload };
    case SORT_BREEDS_BY_WEIGHT:
      // obtenemos la copia de las razas actuales
      const breedsByWeight = [...state.breeds];

      // ordenamos las razas por peso
      if (action.payload === "asc") {
        breedsByWeight.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
      } else if (action.payload === "desc") {
        breedsByWeight.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
      }

      // actualizamos el estado con las razas ordenadas y el orden actual
      return { ...state, breeds: breedsByWeight, sortOrder: action.payload };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        error: "",
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchResults: [],
        error: "",
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filteredByTemperament: [],
        filteredByOrigin: [],
        sortOrder: "",
        breeds: [...state.breeds],
        error: "",
      };
    default:
      return state;
  }
};

export default dogsReducer;
