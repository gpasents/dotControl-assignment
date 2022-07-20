import React, { useEffect, useState } from 'react';
import { getMovies } from '../API/get';
import './styles.css';

const MovieOverview = ({setCurrentMovieTitle}) => {
    let [movieList, setMovieList] = useState([]);

    const getAndSetMovieList = async () =>{
        let res = await getMovies();
        setMovieList(res);
        setCurrentMovieTitle(res[0].Title);
    }
    const selectMovie = (e, title) => {
        setCurrentMovieTitle(title);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {

        getAndSetMovieList();
        
    }, [])


    return (
        <div className='container'>
            <div className='allMoviesContainer'>
                {movieList.map((movie, index) =>
                    <div className='movieCard' style={{backgroundImage: `url(${movie.Poster})`
                        // backgroundImage: `url(${movie.Poster})`, backgroundPosition: 'center',
                        // backgroundSize: 'cover',
                        // backgroundRepeat: 'no-repeat'
                    }} key={index} onClick={(e) => selectMovie(e, movie.Title)}>
                        <h3 className='title'>{movie.Title}</h3>
                        <h4 className='year'>{movie.Year}</h4>
                    </div>)}
            </div>
        </div>
    )
}

export default MovieOverview