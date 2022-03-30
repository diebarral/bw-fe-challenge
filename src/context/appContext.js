import React, { createContext, useState } from "react";

const initialState = {
  searchResults: [],
  setSearchResults: () => {},
  starredCount: 0,
  setStarredCount: () => {}
};

export const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [starredCount, setStarredCount] = useState(0);

  return(
    <AppContext.Provider 
      value={{
        searchResults,
        setSearchResults,
        starredCount,
        setStarredCount
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

