/**
 * Created by imdkva on 25.07.16.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const reducer = combineReducers(reducers);

export default function configureStore() {
  return createStoreWithMiddleware(reducer);
};