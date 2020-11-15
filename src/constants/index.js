import * as types from './ActionTypes';
import {initialState, searchResults} from './InitialState';
import firebaseConfig from './firebaseConfig';

export default {
  initialState: initialState,
  searchResults: searchResults,
  firebaseConfig: firebaseConfig,
  types: types
}
