import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglssSplit,
    BsFillFileEarmakTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export default function Movies() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])


    return (
        <div>
            {movie && <>{movie.title}</>}
        </div>
    );

};
