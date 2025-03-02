import {createStore,applyMiddleware, combineReducers} from "redux";
import filmReducer from "./reducer.js";
import {thunk} from "redux-thunk";
import genreReducer from "./genreReducer/genreReducer.js";



const rootReducer = combineReducers({
   data: filmReducer,
   genre:genreReducer
});
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;