import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'RECEIVE_UPCOMING_MOVIES_RESPONSE',
  'RECEIVE_SEARCH_RESULT_BY_KEYWORD_RESPONSE',
  
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);