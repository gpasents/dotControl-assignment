import React, { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import './styles.css';

const MovieOverview = () => {
    let [movieList, setMovieList] = useState([]);
    let [selectedMovie, setSelectedMovie] = useState({});

    const ALL_MOVIES_URL = 'https://www.omdbapi.com/?apikey=d7a26a70&s=superhero';
    const MOVIE_DETAILS_BASE_URL = 'https://www.omdbapi.com/?apikey=d7a26a70&t=';

    const getMovieDetails = async (title) => {
        const response = await fetch(`${MOVIE_DETAILS_BASE_URL}${title}`);
        const responseJson = await response.json();
        setSelectedMovie(responseJson);

    };

    const getMovies = async () => {
        const response = await fetch(ALL_MOVIES_URL);
        const responseJson = await response.json();

        if (responseJson.Search) {
            let firstMovie = responseJson.Search[0];
            getMovieDetails(firstMovie.Title);
            setMovieList(responseJson.Search);
        }
    };

    const selectMovie = (e, title) => {
        getMovieDetails(title);
    }

    useEffect(() => {
        getMovies();
    }, [])


    return (
        <div className='container'>
            <div className='detailedMoviesContainer'>
                <MovieDetails selectedMovie={selectedMovie} />
            </div>
            <div className='allMoviesContainer'>
                {movieList.map((movie, index) =>
                    <div className='movieCard' style={{
                        backgroundImage: `url(${movie.Poster})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} key={index} onClick={(e) => selectMovie(e, movie.Title)}>
                        <h3 className='title'>{movie.Title}</h3>
                        <h4 className='year'>{movie.Year}</h4>
                    </div>)}
            </div>
        </div>
    )
}

export default MovieOverview