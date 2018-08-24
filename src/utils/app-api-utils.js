import axios from 'axios';
import {
  receiveUpcomingMoviesResponse, receiveSearchByKeywordResponse
} from '../actions/action';

const API_KEY = '0131c79337ac4dc9ed8a36d0e932c1ea';
const API_URL = 'https://api.themoviedb.org/3';

// GET UPCOMING MOVIES
export function getUpcomingMovies(dispatch, params) {
  let url = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  axios.get(url)
  .then(response => {
    const successResponse = response.data;
    dispatch(receiveUpcomingMoviesResponse(successResponse));
  })
  .catch(error => {
    const errorResponse = error;
    dispatch(receiveUpcomingMoviesResponse(errorResponse));
  });
};


// GET SEARCH RESULT BY KEYWORD
export function getSearchResultByKeyword(dispatch, params) {
  let url = `${API_URL}/search/keyword?api_key=${API_KEY}&query=${params}&page=1`;
  axios.get(url)
  .then(response => {
    const successResponse = response.data;
    debugger
    dispatch(receiveSearchByKeywordResponse(successResponse));
  })
  .catch(error => {
    const errorResponse = error;
    debugger
    dispatch(receiveSearchByKeywordResponse(errorResponse));
  });
};