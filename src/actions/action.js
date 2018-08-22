import ActionTypes from '../constants/action-type';
import {
  getUpcomingMovies
} from '../utils/app-api-utils';

export const simpleAction = () => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION',
   payload: 'result_of_simple_action'
  })
 }

 // GET JOB POST APPLICANTS

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