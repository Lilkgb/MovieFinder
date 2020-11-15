import React, {useState} from 'react';

function Search(){

    function updateParam(e){
        setSearchParam(e);
        setDropDown(!dropDown)
    }

    const [dropDown, setDropDown] = useState(false);
    const [searchParam, setSearchParam] = useState("All");

    return(
        <div className="searchBar">
            <div className="searchContainer">
                <button onClick={() => setDropDown(!dropDown)}>{searchParam} &#9660;</button>
                <input placeholder="Search" />
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