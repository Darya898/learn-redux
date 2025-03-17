import {createStore,applyMiddleware, combineReducers} from "redux";
import filmReducer from "./reducer.js";
import {thunk} from "redux-thunk";
import genreReducer from "./genreReducer/genreReducer.js";
import questionReducer from "./questionReducer/questionReducer.js";



const rootReducer = combineReducers({
   data: filmReducer,
   genre:genreReducer,
   question:questionReducer,
});
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;