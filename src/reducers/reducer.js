import ActionTypes from '../constants/action-type';
import { Map as makeMap } from 'immutable';

export const initialState =  makeMap({

});

const reducer = (state = initialState, action) => {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }

  switch (action.type) {

   case 'SIMPLE_ACTION':
    return {
     result: action.payload
    }

    case ActionTypes.RECEIVE_UPCOMING_MOVIES_RESPONSE: {
      state = state.set('upcomingMoviesResponse', action.response.upcomingMoviesResponse);
      return state;
    }
   default:
    return state
  }
 }

 export default reducer;