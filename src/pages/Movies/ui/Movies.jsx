import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms, searchFilms} from "../model/movieActions.js";
import {addMove, addMoveFavorite, addMoveFavoriteList, rateMovie, removeMovie, sortMovies} from "../model/actions.js";
import CustomSelect from "../../../shared/ui/CustomSelect.jsx";

const Movies = () => {
    const [name,setName]=useState('');
    const [sort,setSort]=useState('');
    const [search, setSearch]=useState('');
    const films=useSelector((state)=>state.data.sortFilms);
    const favorites=useSelector(state=>state.data.favorites);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchFilms());
        if(localStorage.favorite){
            dispatch(addMoveFavoriteList(JSON.parse(localStorage.favorite)))
        }
    }, []);

    useEffect(() => {
        dispatch(searchFilms(search));
    }, [search]);


    const addFilm=()=>{
        if(name){
            dispatch(addMove(name));
            setName('');
        }
    }
    const changeSort=(value)=>{
        dispatch(sortMovies(value));
        setSort(value)
    }
    const deleteFilm=(id)=>{
        dispatch(removeMovie(id));
    }
    const getChange=(e,id)=>{
        dispatch(rateMovie(id,+e.target.value))
    }
    const addFavorit=(film)=>{
        dispatch(addMoveFavorite(film))
    }
    return (
        <div>
            <div>
                <div>
                    <input value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <button onClick={addFilm}>Добавить</button>
                </div>
                <div>
                    <select value={sort} onChange={(e) => changeSort(e.target.value)}>
                        <option value="" disabled hidden>Сортировка</option>
                        <option value="top">По возрастанию</option>
                        <option value="down">По убыванию</option>
                    </select>
                </div>
                <div>
                    <input placeholder="Поиск" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                </div>
            </div>
            <ul>
                {films.map((film)=>(
                    <li key={film.id}>
                        <h2>{film.name||film.alternativeName}</h2>
                        <div>
                            <img src={film?.poster?.previewUrl}></img>
                        </div>
                        <CustomSelect rate={film.rating.kp} getChange={(e)=>getChange(e,film.id)}></CustomSelect>
                        <button onClick={()=>addFavorit(film)}>Добавить в избранное</button>
                        <button onClick={()=>deleteFilm(film.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;