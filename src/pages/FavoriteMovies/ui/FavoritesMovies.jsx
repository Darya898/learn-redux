import {useDispatch, useSelector} from "react-redux";
import {addMoveFavoriteList, deleteMoveFavorite} from "../../Movies/model/actions.js";

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