import {
  CREATE_NEW_DOG,
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
  LOADING_BREEDS,
} from "../../redux/actions/index";

const initialState = {
  newDog: null,
  breeds: [],
  breedDetail: {},
  allTemperaments: [],
  selectedTemperament: null,
  selectedOrigin: null,
  searchResults: [],
  sortOrder: "",
  currentPage: 1,
  breedsPerPage: 8,
  error: "",
  loadingBreeds: false,
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_DOG:
      return {
        ...state,
        newDog: action.payload,
        error: "",
      };
    case LOADING_BREEDS:
      return {
        ...state,
        loadingBreeds: true,
        error: "",
      };
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
        loadingBreeds: false,
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
        selectedTemperament: action.payload,
        currentPage: 1,
        error: "",
      };
    case FILTER_BY_ORIGIN:
      return {
        ...state,
        selectedOrigin: action.payload,
        currentPage: 1,
        error: "",
      };
    case SORT_BREEDS_BY_NAME:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case SORT_BREEDS_BY_WEIGHT:
      return {
        ...state,
        sortOrder: action.payload,
      };

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
        filteredByTemperament: null,
        filteredByOrigin: null,
        sortOrder: "",
        breeds: [...state.breeds],
        error: "",
      };
    default:
      return state;
  }
};

export default dogsReducer;
