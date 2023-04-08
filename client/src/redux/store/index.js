// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import dogsReducer from "../reducer/index";

// // Combine todos los reducers en un reducer principal
// const rootReducer = combineReducers({
//   dogs: dogsReducer,
// });

// // Configura el middleware de thunk para manejar acciones asincrónicas
// const middleware = [thunk];

// // Crea el store de Redux con el reducer principal y el middleware
// const store = createStore(rootReducer, applyMiddleware(...middleware));

// export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import dogsReducer from "../reducer/index";

// const rootReducer = combineReducers({
//   dogs: dogsReducer,
// });

const middlewares = [thunkMiddleware];

const store = createStore(
  dogsReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
