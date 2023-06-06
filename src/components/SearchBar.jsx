import { useState, useContext } from "react";
import { showsContext } from "../context/showContext";

const SearchBar = () =>{
    const [searchShow, setSearchShow] = useState('');
    const { searchShows } = useContext(showsContext);

    const handleSearch = (e) =>{
        e.preventDefault();

        searchShows(searchShow);
    }

    return (
        <div className="searchbar">
            <form className="search-form">
                <input type='text' placeholder="search shows" value={searchShow} onChange={e => setSearchShow(e.target.value)}/>
                <button className="search btn btn-block" onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;