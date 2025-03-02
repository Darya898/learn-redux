import {
    ADD_MOVIE,
    ADD_MOVIE_LIST,
    RATE_MOVIE,
    REMOVE_MOVIE,
    SEARCH_MOVIES,
    SORT_MOVIES,
    ADD_MOVIE_FAVORITE,
    ADD_FAVORITE_MOVIE_LIST, DELETE_MOVIE_FAVORITE
} from "./actions.js";

const initialState={
    films:[],
    sortFilms:[],
    favorites:[],
}


const filmReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_MOVIE:
            return {...state,
                    films:[...state.films,
                          {name:action.payload,
                           id:new Date().getTime(),
                           rate:0,
                          }],
                sortFilms:[...state.sortFilms,
                       {name:action.payload,
                        id:new Date().getTime(),
                        rate:0,
                    }],
            };
        case ADD_MOVIE_FAVORITE:
            localStorage.setItem('favorite',JSON.stringify([...state.favorites,action.payload]))
            return {
                ...state,
                favorites:[...state.favorites,action.payload],
            };
        case ADD_MOVIE_LIST:
            return {
                ...state,
                films:[...action.payload.map(i=>({...i,rate:0}))],
                sortFilms:[...action.payload.map(i=>({...i,rate:0}))],
            }
        case ADD_FAVORITE_MOVIE_LIST:
            return {
                ...state,
                favorites:[...action.payload],
            }
        case REMOVE_MOVIE:
            return {...state,
                    films:[...state.films.filter(film=>film.id!=action.payload)],
                    sortFilms:[...state.sortFilms.filter(film=>film.id!=action.payload)]

            };

        case DELETE_MOVIE_FAVORITE:
            const filmsFavorite=[...state.favorites.filter(film=>film.id!=action.payload)];
            if(filmsFavorite.length){
                localStorage.setItem('favorite',JSON.stringify(filmsFavorite))
            }
            else if(localStorage.favorite){
                localStorage.removeItem('favorite')
            }
            return {...state,
                favorites:[...state.favorites.filter(film=>film.id!=action.payload)],
            };
        case RATE_MOVIE:
            return {...state,
                    films:[...state.films.map(film=>({...film,rating:{...film.rating,kp:film.id==action.payload.id?action.payload.rate:film.rating.kp}}))
                ],
                    sortFilms:[...state.sortFilms.map(film=>({...film,rating:{...film.rating,kp:film.id==action.payload.id?action.payload.rate:film.rating.kp}}))],

            }
        case SORT_MOVIES:
            return {...state,
                sortFilms:[...state.sortFilms.sort((a,b)=>action.payload=='top'?a.rating.kp-b.rating.kp:b.rating.kp-a.rating.kp)],

            }
        case SEARCH_MOVIES:
            console.log("action.payload",action.payload)
            return {
                ...state,
                sortFilms:action.payload?[...state.films.filter(i=>i.name.toLowerCase().replace(/\s/g, '').includes(action.payload.toLowerCase().replace(/\s/g, '')))]:[...state.films]
            }
        default:
            return state;
    }

}
export default filmReducer;