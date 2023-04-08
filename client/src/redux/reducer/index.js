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
  allBreeds: [],
  allTemperaments: [],
  filteredBreeds: [],
  filteredByTemperament: [],
  filteredByOrigin: [],
  searchResults: [],
  selectedBreedId: null,
  sortOrder: "",
  currentPage: 1,
  breedsPerPage: 8,
  error: "",
  findFailed: "",
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
        error: "",
      };
    case SORT_BREEDS_BY_NAME:
      return {
        ...state,
        sortOrder: "name",
        breeds: [...state.breeds].sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        }),
        error: "",
      };
    case SORT_BREEDS_BY_WEIGHT:
      return {
        ...state,
        sortOrder: "weight",
        breeds: [...state.breeds].sort((a, b) => {
          if (a.weight.imperial < b.weight.imperial) return -1;
          if (a.weight.imperial > b.weight.imperial) return 1;
          return 0;
        }),
        error: "",
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
        filteredByTemperament: [],
        filteredByOrigin: [],
        sortOrder: "",
        breeds: [...state.allBreeds],
        error: "",
      };
    default:
      return state;
  }
};

export default dogsReducer;
