import * as types from './ActionTypes';
import {initialState, searchState} from './InitialState';
import firebaseConfig from './firebaseConfig';

export default {
  initialState: initialState,
  searchState: searchState,
  firebaseConfig: firebaseConfig,
  types: types
}
