import {GET_GENRE, GET_IMG_GENRE} from "./actions.js";
import {categoriesSectionData} from "../../../../../shared/data/categoriesSectionData.js";
const initialState={
    genres:[...categoriesSectionData,...categoriesSectionData]
}
const genreReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_GENRE:
            return {
                ...state,
                genres:[...action.payload.map(film=>({...film,imgs:[]}))],

            }
        case GET_IMG_GENRE:
            return {
                ...state,
                genres:[...state.genres.map(film=>({...film,imgs:film.name==action.payload.genre?action.payload.data.map(i=>i.poster.previewUrl):film.imgs}))],

            }
        default:
            return state;

    }
}
export default genreReducer;