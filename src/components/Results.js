import React from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

function Results(props){
    console.log(props)

    let display;

    function loadFunc(){
        console.log("will get their")
    }

    function hasMoreStuff(){
        console.log("not sure yet")
    }

    if(props.results){
        display = <InfiniteScroll pageStart={0}
        loadMore={loadFunc}
        hasMore={hasMoreStuff}
        loader={<div key={0}><img className="loading" src={require('../assets/circle-loading-gif.gif')}></img></div>}
        useWindow={false}> 
            {Object.keys(props.results.Search).map((movies) => {
                let movie = props.results.Search[movies];
                return <div key={movies}>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster}/>
                </div>
            })}
        </InfiniteScroll>
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