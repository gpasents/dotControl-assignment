import React from 'react';
import './styles.css';

const MovieDetails = ({selectedMovie}) => {

  let {imdbID,Title,Plot} = selectedMovie;

  return (
    <div className='detailsContainer' style={{
      backgroundImage: `url(${selectedMovie.Poster})`,
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