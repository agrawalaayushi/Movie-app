import ActionTypes from '../constants/action-type';
import {
  getUpcomingMovies, getSearchResultByKeyword
} from '../utils/app-api-utils';

export const simpleAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action'
  })
 }

// GET UPCOMING MOVIES
export function requestUpcomingMovies(params) {
  return(dispatch)=>{
    getUpcomingMovies(dispatch, params);
  }
};

export function receiveUpcomingMoviesResponse(response) {
  response.upcomingMoviesResponse = response;
  return{
    type: ActionTypes.RECEIVE_UPCOMING_MOVIES_RESPONSE,
    response
  }
};

// GET MOVIES
export function requestSearchByKeyword(params) {
  return(dispatch)=>{
    getSearchResultByKeyword(dispatch, params);
  }
};

export function receiveSearchByKeywordResponse(response) {
  response.searchByKeywordResponse = response;
  return{
    type: ActionTypes.RECEIVE_SEARCH_RESULT_BY_KEYWORD_RESPONSE,
    response
  }
};

// GET MOVIE DETAILS

export function requestMovieDetails(params) {
  return(dispatch)=>{
    getSearchResultByKeyword(dispatch, params);
  }
};

// export function receiveSearchByKeywordResponse(response) {
//   response.searchByKeywordResponse = response;
//   return{
//     type: ActionTypes.RECEIVE_SEARCH_RESULT_BY_KEYWORD_RESPONSE,
//     response
//   }
// };