import {dataQuestions} from "../../../../../shared/data/questionBlockData.js";
import {ADD_QUESTION} from "./action.js";
const initialState={
      question:[...dataQuestions]
}
const questionReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_QUESTION:
            return {
                ...state,
                question:[...state.question,{...action.payload,
                number:(state.question.length+1)<10?'0'+(state.question.length+1):(state.question.length+1)}],
            }
        default:
            return state;

    }
}
export default questionReducer;