import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies.jsx';
import FavoritesMovies from './pages/FavoritesMovies';
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

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