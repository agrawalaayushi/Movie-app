import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'RECEIVE_UPCOMING_MOVIES_RESPONSE',
  
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);