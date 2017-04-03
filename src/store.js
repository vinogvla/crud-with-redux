import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';

export default createStore(
  rootReducer, 
  /* preloadedState, */
  devToolsEnhancer()
  // composeWithDevTools(
  //   applyMiddleware(...middleware)
  // )
);
