import React, {useState} from 'react';
import {store} from '../index';
import {searchOmdb} from '../actions/index';

function Search(){

    function updateParam(e){
        setSearchParam(e);
        setDropDown(!dropDown)
    }

    function startSearch(e){
        e.preventDefault();
        searchOmdb(search);
    }

    const [dropDown, setDropDown] = useState(false);
    const [searchParam, setSearchParam] = useState("All");
    const [search, setSearch] = useState("")

    return(
        <div className="searchBar">
            <div className="searchContainer">
                <button className="paramButton" onClick={() => setDropDown(!dropDown)}>{searchParam} &#9660;</button>
                <form onSubmit={startSearch}>
                    <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/>
                    <button className="submitButton" type="submit">	&#128269;</button>
                </form>
            </div>
            <div className={`switch ${dropDown ? "dropDown" : "hide"}`} >
                <p onClick={() => updateParam("All")}>All</p>
                <p onClick={() => updateParam("Titles")}>Titles</p>
                <p onClick={() => updateParam("Names")}>Names</p>
                <p onClick={() => updateParam("Companies")}>Companies</p>
            </div>
        </div>
    )
}

export default Search;