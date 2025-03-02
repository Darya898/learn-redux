import { searchMovies, addMoveList, addFonImgs} from "./actions.js";

export const fetchFilms=()=>{
    return async(dispatch)=>{
        try{
            const options = {method: 'GET', headers: {accept: 'application/json','X-API-KEY': 'YW8B63Z-QW24QEH-QN70F63-RDDPJGQ'}};
            const response=await fetch('https://api.kinopoisk.dev/v1.4/movie?year=2024', options);
            const data=await response.json();
            if(data&&data.docs){
                dispatch(addMoveList(data.docs))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const fetchFilmsImg=()=>{
    return async(dispatch)=>{
        try{
            const options = {method: 'GET', headers: {accept: 'application/json','X-API-KEY': 'YW8B63Z-QW24QEH-QN70F63-RDDPJGQ'}};
            const response=await fetch('https:////api.kinopoisk.dev/v1.4/image?page=1&limit=10', options);
            const data=await response.json();
            if(data&&data.docs){
                dispatch(addFonImgs(data.docs))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const searchFilms=(text)=>{
    return (dispatch)=>{
        dispatch(searchMovies(text))
    }
}