import React from "react";
import styles from "./Search.module.scss";

const Search = ({updateSearch}) => {
    return (
        <form className="mt-4 mb-4">
            <input onChange={e=>{
                updateSearch(e.target.value);
            }}type="text" className="form-control" placeholder="Wyszukaj" />
        </form>
    )
};

export default Search;