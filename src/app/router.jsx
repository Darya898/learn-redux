import { createBrowserRouter } from 'react-router-dom';
import Layout from "@/app/layouts/Layout.jsx";
import {Home} from "@/pages/Home/index.jsx";
import Movies from "@/pages/Movies/ui/Movies.jsx";
import FavoritesMovies from "@/pages/FavoriteMovies/ui/FavoritesMovies.jsx";
import {NotFound} from "@/pages/NotFound/index.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/films',
                element: <Movies/>,
            },
            {
                path: '/favorits',
                element: <FavoritesMovies/>,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/> ,
    },

]);