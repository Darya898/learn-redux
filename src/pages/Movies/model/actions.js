export const ADD_MOVIE='ADD_MOVIE';
export const REMOVE_MOVIE='REMOVE_MOVIE';
export const RATE_MOVIE='RATE_MOVIE';
export const SORT_MOVIES='SORT_MOVIES';
export const SEARCH_MOVIES='SEARCH_MOVIES';
export const ADD_MOVIE_LIST='ADD_MOVIE_LIST';
export const ADD_MOVIE_FAVORITE='ADD_MOVIE_FAVORITE';
export const ADD_FAVORITE_MOVIE_LIST='ADD_FAVORITE_MOVIE_LIST';
export const DELETE_MOVIE_FAVORITE='DELETE_MOVIE_FAVORITE';
export const ADD_FON_IMGS='ADD_FON_IMGS';

export const addMove=(text)=>({
    type:ADD_MOVIE,
    payload:text,
});
export const addFonImgs=(data)=>({
    type:ADD_FON_IMGS,
    payload:data,
})
export const deleteMoveFavorite=(id)=>({
    type:DELETE_MOVIE_FAVORITE,
    payload:id,
});
export const addMoveFavorite=(data)=>({
    type:ADD_MOVIE_FAVORITE,
    payload:data,
});
export const addMoveFavoriteList=(data)=>({
    type:ADD_FAVORITE_MOVIE_LIST,
    payload:data,
});
export const addMoveList=(arr)=>({
    type:ADD_MOVIE_LIST,
    payload:arr,
});
export const removeMovie=(id)=>({
    type:REMOVE_MOVIE,
    payload: id,
});
export const rateMovie=(id,rate)=>({
    type:RATE_MOVIE,
    payload:{id:id,rate:rate}
})
export const sortMovies=(text)=>({
    type:SORT_MOVIES,
    payload:text,
})

export const searchMovies=(text)=>({
    type:SEARCH_MOVIES,
    payload:text,
})