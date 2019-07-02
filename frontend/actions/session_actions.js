import * as SesssionApiUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';

// Regular Action Creators
// receiveCurrentUser(currentUser)
const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  });
}

// logoutCurrentUser()
const logoutCurrentUser = () => {
  return ({
    type: REMOVE_CURRENT_USER
  });
}

// receiveErrors(errors)
const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERROR,
    errors: errors
  });
};


// Thunk Action Creators
// logIn(user)
export const logIn = user => dispatch => {
  return SesssionApiUtil.logIn(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};

// logOut()
export const logOut = () => dispatch => {
  return SesssionApiUtil.logOut()
    .then(res => dispatch(logoutCurrentUser(res)));
}

// signUp(user)
export const signUp = user => dispatch => {
  return SesssionApiUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)));
};
