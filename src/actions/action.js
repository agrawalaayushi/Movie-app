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
  // if (response.hasOwnProperty('success') && !response.success) {
  //   response.isSuccess = false;
  //   response.isError = true;
  //   response.jobPostApplicantsResponse = getErrorMessage(response.error);
  // } else {
  //   response.isSuccess = true;
  //   response.isError = false;
  //   response.jobPostApplicantsResponse = response.data;
  // }
  return{
    type: ActionTypes.RECEIVE_UPCOMING_MOVIES_RESPONSE,
    response
  }
};