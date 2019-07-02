
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser
      return newState;
    default:
      return oldState;
  }
};
