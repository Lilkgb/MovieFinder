import constants from './../constants';
import axios from 'axios';
const {types, searchState} = constants

const searchReducer = (state = searchState, action) => {
  let newState;
  switch (action.type) {
    case types.GET_RESULTS_OMDB:
      newState = state;
       newState = action.searchParam;
      return newState;
    default:
      return state;
  }
}

export default searchReducer;