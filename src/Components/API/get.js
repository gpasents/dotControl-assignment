const ALL_MOVIES_URL = 'https://www.omdbapi.com/?apikey=d7a26a70&s=superhero';
const MOVIE_DETAILS_BASE_URL = 'https://www.omdbapi.com/?apikey=d7a26a70&t=';


export const getMovieDetails = async (title) => {
    const response = await fetch(`${MOVIE_DETAILS_BASE_URL}${title}`);
    const responseJson = await response.json();
    return responseJson;
    
};

export const getMovies = async () => {
    const response = await fetch(ALL_MOVIES_URL);
    const responseJson = await response.json();

    if (responseJson.Search) {
        return responseJson.Search
    }
};