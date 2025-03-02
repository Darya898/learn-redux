import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CustomSelect from "../UI/CustomSelect.jsx";
import {addMoveFavoriteList, deleteMoveFavorite} from "../store/actions.js";
import {fetchFilms} from "../store/movieActions.js";

const FavoritesMovies = () => {
    const favorites=useSelector(state=>state.data.favorites);
    const dispatch=useDispatch();
    useEffect(() => {
        if(localStorage.favorite){
            dispatch(addMoveFavoriteList(JSON.parse(localStorage.favorite)))
        }
    }, []);
    const deleteFavoriteFilm=(id)=>{
          dispatch(deleteMoveFavorite(id));
    }
    return (
        <ul>
            {favorites.map(film =>(
                <li key={film.id}>
                    <h2>{film.name || film.alternativeName}</h2>
                    <div>
                        <img src={film?.poster?.previewUrl}></img>
                    </div>

                    <button onClick={() => deleteFavoriteFilm(film.id)}>Удалить</button>
                </li>)
            )}

        </ul>
    );
};

export default FavoritesMovies;