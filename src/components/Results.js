import React from 'react';
import {connect} from 'react-redux';

function Results(props){
    console.log(props)

    let display;

    if(props.results){
        display = Object.keys(props.results.Search).map((movies) => {
            let movie = props.results.Search[movies];
            return <div key={movies}>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster}/>
            </div>
        })    
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