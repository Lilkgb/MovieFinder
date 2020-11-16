import React, {useState} from 'react';
import {connect} from 'react-redux';
import {store} from '../index';
import {searchMoreResults} from '../actions/index';
import InfiniteScroll from 'react-infinite-scroller';

function Results(props){

    console.log(props)

    let display;

    function loadFunc(){
        searchMoreResults();
    }

    if(props.results){
        display = <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true}
        loader={<div key={0}><img className="loading" src={require('../assets/circle-loading-gif.gif')}></img></div>}
        useWindow={true}
        >
        {Object.keys(props.results).map((movies) => {
            let movie = props.results[movies];
            return <div key={movies}>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster}/>
            </div>
        })}
        {/* eslint-enable */}
        </InfiniteScroll>
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