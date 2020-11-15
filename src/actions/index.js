import constants from './../constants';
import * as firebase from 'firebase';
const {types, firebaseConfig} = constants;
let unirest = require("unirest");

let req = unirest("GET", "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception");

req.headers({
  "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
  "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
  "useQueryString": true
});

  // req.end(function (res) {
  //   if (res.error) throw new Error(res.error);
  
  //   console.log(res.body);
  // });

firebase.initializeApp(firebaseConfig);

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})