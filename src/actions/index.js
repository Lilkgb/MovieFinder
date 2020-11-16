import constants from './../constants';
import * as firebase from 'firebase';
import axios from 'axios';
import {store} from '../index';
const {types, firebaseConfig} = constants;

firebase.initializeApp(firebaseConfig);

let pageNum;
let param;

export function searchOmdb(searchParam){
  pageNum = 1;
  param = searchParam;
  let split = searchParam.replace(" ", "+")
    axios.get(`http://www.omdbapi.com/?apikey=6f0fb35d&s=${split}&${pageNum}`).then(res => res.data).then(res => {
        if(!res.Search){
            store.dispatch(getResultsOmdb(false));
        } else {
            store.dispatch(getResultsOmdb(res));
        }
    })
    pageNum = 2;
}

export function searchMoreResults(){
    axios.get(`http://www.omdbapi.com/?apikey=6f0fb35d&s=${param}&page=${pageNum}`).then(res => res.data).then(res => {
        if(!res.Search){
            return false
        } else {
            store.dispatch(addMoreResults(res));
        }
    })
    pageNum = pageNum + 1;
}

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const getResultsOmdb = (searchParam) => ({
  type: types.GET_RESULTS_OMDB,
  searchParam
})

export const addMoreResults = (searchParam) => ({
  type: types.ADD_MORE_RESULTS,
  searchParam
})
