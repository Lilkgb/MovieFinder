import constants from './../constants';
import axios from 'axios';
const {types, searchResults} = constants
let unirest = require("unirest");

const searchReducer = (state = searchResults, action) => {
  let newState;
  switch (action.type) {
    case types.SEARCH_IMDB:
      newState = state;
      let split = action.searchParam.replace(" ", "+")
        axios.get(`http://www.omdbapi.com/?apikey=6f0fb35d&s=${split}`).then(res => res.data).then(res => {
            if(!res.Search){
                newState = null;
            } else {
                newState = res;
            }
        });
      return newState;
    default:
      return state;
  }
}

export default searchReducer;