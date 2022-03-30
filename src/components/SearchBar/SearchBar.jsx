import React, { useState, useEffect, useContext, useRef } from "react";

import { get } from '../../services/apiService';
import { AppContext } from "../../context/appContext";

import './styles.scss';

const SearchBar = () => {
  const [searchText, setSearchText] = useState();
  const isMounted = useRef(false);

  const { starredCount, setSearchResults } = useContext(AppContext);

  useEffect(() => {
    if (isMounted.current) {
      if (searchText) {
        get(searchText).then(({ data }) => {
          setSearchResults(data)
        });
      } else {
        setSearchResults([]);
      }
    } else {
      isMounted.current = true;
    }
  }, [searchText, setSearchResults]);
  
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="form-control search-bar-input"
        aria-label="Search"
        placeholder="Search..."
        value={searchText}
        onInput={e => setSearchText(e.target.value)}
      />
      <span>{starredCount} starred items</span>
    </div>
  )
};

export default SearchBar;