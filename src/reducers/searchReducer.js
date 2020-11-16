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
        console.log(action)
        if(action){
          action.searchParam.Search.forEach(function(el) {
            if(el){
              newState.push(el)
            } else {
              newState.push("That is all folks!")
            }
          })
        } else {
          console.log("no more")
        }
        return newState;
    default:
      return state;
  }
}

export default searchReducer;