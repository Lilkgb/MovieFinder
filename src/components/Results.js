import React, {useState} from 'react';
import {connect} from 'react-redux';
import {store} from '../index';
import {searchMoreResults} from '../actions/index';

function Results(props){

    console.log(props)

    let display;

    function loadFunc(){
        searchMoreResults();
    }

    if(props.results){
        display = <div>
        {Object.keys(props.results).map((movies) => {
            let movie = props.results[movies];
            return <div key={movies}>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster}/>
            </div>
        })}
        <button onClick={loadFunc}>load more</button>
        </div>
            
    } else {
        display = null;
    }

    return(
        <div>
            <h1>Results</h1>
            {display}
        </div>
    )
}

const mapStateToProps = state => ({
    results: state.searchState
  })

export default connect(mapStateToProps)(Results);