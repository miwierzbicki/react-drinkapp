import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
    return (
        <form className="mt-4 mb-4">
            <input type="text" className="form-control" placeholder="Wyszukaj" />
        </form>
    )
};

export default Search;