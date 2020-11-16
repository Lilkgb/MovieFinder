import constants from './../constants';
import axios from 'axios';
const {types, searchState} = constants

const searchReducer = (state = searchState, action) => {
  let newState;
  switch (action.type) {
    case types.GET_RESULTS_OMDB:
      newState = state;
       newState = action.searchParam.Search;
      return newState;
    case types.ADD_MORE_RESULTS:
        newState = [...state];
        console.log(newState)
        action.searchParam.Search.forEach(function(el) {
            newState.push(el)
        })
        console.log(newState)
        return newState;
    default:
      return state;
  }
}

export default searchReducer;