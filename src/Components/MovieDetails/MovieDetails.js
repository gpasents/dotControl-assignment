import React,{useEffect,useState} from 'react';
import { getMovieDetails } from '../API/get';
import './styles.css';

const MovieDetails = ({ currentMovieTitle}) => {
    let [movieDetails,setMovieDetails] = useState({});

    let { imdbID, Title, Plot,Poster } = movieDetails;

    const getAndSetMovieDetails = async ()=>{
        let movie = await getMovieDetails(currentMovieTitle);
        setMovieDetails(movie);
    }
    
    const goToImdb = () =>{
        window.location.href = `https://www.imdb.com/title/${imdbID}`;
    }

    useEffect(()=>{
        getAndSetMovieDetails();
    },[currentMovieTitle])

    

    return (
        <div className='detailsContainer' style={{backgroundImage : `url(${Poster})`}}>
            <h1> {Title}</h1>
            <p>{Plot}</p>
            <button onClick={goToImdb}> Learn More</button>
        </div>
    )
}

export default MovieDetails