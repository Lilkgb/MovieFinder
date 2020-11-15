import React from 'react';
import Header from './Header';
import {store} from '../index';
import {testFunction} from '../actions/index';
let unirest = require("unirest");

function Home(props){

  let req = unirest("GET", "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception");

  req.headers({
    "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    "useQueryString": true
  });

  function testRedux(){
    store.dispatch(testFunction())
  }

  function testAPI(){
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
    
      console.log(res.body);
    });
    
  }

  return(
    <div>
      <Header />
      <h1>Welcome to the home component</h1>
      <button onClick={testRedux}>Test Reducer Function. Open console to see console log.</button>
      <button onClick={testAPI} >Click here to test the api call</button>
    </div>
  )
}

export default Home;
