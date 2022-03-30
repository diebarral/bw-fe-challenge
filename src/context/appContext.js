import React, { createContext, useState } from "react";

const COUNT_KEY = 'starred-items-count';

const initialState = {
  searchResults: [],
  setSearchResults: () => {},
  starredCount: parseInt(localStorage.getItem(COUNT_KEY)) || 0,
  updateStarredCount: () => {}
};

export const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(initialState.searchResults);
  const [starredCount, setStarredCount] = useState(initialState.starredCount);

  const updateStarredCount = (count) => {
    setStarredCount(count);
    localStorage.setItem(COUNT_KEY, count);
  }

  return(
    <AppContext.Provider 
      value={{
        searchResults,
        setSearchResults,
        starredCount,
        updateStarredCount
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

