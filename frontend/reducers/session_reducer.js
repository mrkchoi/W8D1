import { 
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER,
} from '../actions/session_actions';
import {merge} from 'lodash';

let defaultState = { id: null };

export const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case REMOVE_CURRENT_USER:
      return defaultState;
    default:
      return oldState;
  }
};