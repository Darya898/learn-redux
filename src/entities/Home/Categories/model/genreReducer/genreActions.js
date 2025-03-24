import {getGenre, getImgGenre} from "./actions.js";

export const fetchGenres=()=>{
    return async(dispatch)=>{
        try{
            const options = {method: 'GET', headers: {accept: 'application/json','X-API-KEY': 'YW8B63Z-QW24QEH-QN70F63-RDDPJGQ'}};
            const response=await fetch('https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name', options);
            const data=await response.json();
            if(data&&data.length){
                dispatch(getGenre(data))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}
export const fetchMovieByGenres=(genre)=>{
    return async(dispatch)=>{
        try{
            const options = {method: 'GET', headers: {accept: 'application/json','X-API-KEY': 'YW8B63Z-QW24QEH-QN70F63-RDDPJGQ'}};
            const response=await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=4&selectFields=poster&notNullFields=poster.url&genres.name=${genre}`, options);
            const data=await response.json();
            if(data&&data.docs.length){
                dispatch(getImgGenre(data.docs,genre))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}