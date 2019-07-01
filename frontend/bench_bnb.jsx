import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionAPIUtil from './utils/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // testing purposes only
  window.signUp = SessionAPIUtil.signUp
  window.logIn = SessionAPIUtil.logIn
  window.logOut = SessionAPIUtil.logOut



  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});