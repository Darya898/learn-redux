import {GET_GENRE, GET_IMG_GENRE} from "./actions.js";
const initialState={
    genres:[]
}
const genreReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_GENRE:
            return {
                ...state,
                genres:[...action.payload.map(film=>({...film,imgs:[]}))],

            }
        case GET_IMG_GENRE:
            console.log("action.payload",action.payload)
            return {
                ...state,
                genres:[...state.genres.map(film=>({...film,imgs:film.name==action.payload.genre?action.payload.data.map(i=>i.poster.previewUrl):film.imgs}))],

            }
        default:
            return state;

    }
}
export default genreReducer;