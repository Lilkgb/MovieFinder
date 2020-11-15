import constants from './../constants';
import * as firebase from 'firebase';
import axios from 'axios';
import {store} from '../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

export function searchOmdb(searchParam){
  console.log(searchParam)
  let split = searchParam.replace(" ", "+")
    axios.get(`http://www.omdbapi.com/?apikey=6f0fb35d&s=${split}`).then(res => res.data).then(res => {
        if(!res.Search){
            let newState = "n/a";
        } else {
            store.dispatch(searchImdb(res));
        }
    })
}

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const searchImdb= (searchParam) => ({
  type: types.SEARCH_IMDB,
  searchParam
})
