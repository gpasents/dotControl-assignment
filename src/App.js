import React, { useEffect, useState } from 'react';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import MovieOverview from './Components/MovieOverview/MovieOverview';
import './App.css';

function App() {
  let [currentMovieTitle, setCurrentMovieTitle] = useState('');
   
  return (
    <div className="App" >
      <MovieDetails currentMovieTitle={currentMovieTitle} />
      <MovieOverview setCurrentMovieTitle={setCurrentMovieTitle} />
    </div>
  );
}

export default App;
