import React,{useEffect,useState} from 'react';
import { getMovieDetails } from '../API/get';
import './styles.css';

const MovieDetails = ({ currentMovieTitle }) => {
    let [movieDetails,setMovieDetails] = useState({});

    const getAndSetMovieDetails = async ()=>{
        let movie = await getMovieDetails(currentMovieTitle);
        setMovieDetails(movie);
    }

    useEffect(()=>{
        getAndSetMovieDetails();
    },[currentMovieTitle])

    let { imdbID, Title, Plot } = movieDetails;

    return (
        <div className='detailsContainer' style={{
            backgroundImage: `url(${movieDetails.Poster})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}>
            <h1> {Title}</h1>
            <p>{Plot}</p>
            <a href={`https://www.imdb.com/title/${imdbID}`} target='_blank' > Link to IMDB </a>
          </div>
    )
}

export default MovieDetails