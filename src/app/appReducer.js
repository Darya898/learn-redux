import {combineReducers} from "redux";
import filmReducer from "@/pages/Movies/model/reducer.js";
import genreReducer from "@/entities/Home/Categories/model/genreReducer/genreReducer.js";
import questionReducer from "@/entities/Home/Question/model/questionReducer/questionReducer.js";

export  const rootReducer = combineReducers({
    data: filmReducer,
    genre:genreReducer,
    question:questionReducer,
});