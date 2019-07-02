import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  );
}
