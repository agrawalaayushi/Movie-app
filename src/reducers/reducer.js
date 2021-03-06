import ActionTypes from '../constants/action-type';
import { Map as makeMap } from 'immutable';

export const initialState =  makeMap({

});

const reducer = (state = initialState, action) => {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {

    case ActionTypes.RECEIVE_UPCOMING_MOVIES_RESPONSE: {
      state = state.set('upcomingMoviesResponse', action.response.upcomingMoviesResponse);
      return state;
    }

    case ActionTypes.RECEIVE_SEARCH_RESULT_BY_KEYWORD_RESPONSE: {
      state = state.set('searchByKeywordResponse', action.response.searchByKeywordResponse);
      return state;
    }

    case ActionTypes.RECEIVE_MOVIE_DETAILS_RESPONSE: {
      state = state.set('movieDetailsResponse', action.response.movieDetailsResponse);
      return state;
    }

    default:
      return state
  }
 }

 export default reducer;