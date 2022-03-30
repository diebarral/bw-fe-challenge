import React, { useContext } from "react";
import Match from "../Match/Match";
import { AppContext } from "../../context/appContext";
import { put } from '../../services/apiService';

import './styles.scss';

const SearchResults = () => {
  const { searchResults, setSearchResults, updateStarredCount, starredCount } = useContext(AppContext);

  const readableAddress = (address) => {
    if (!address) { return null }
    
    const { address1, address2, city, state, postalCode } = address;
    const secondaryLine = address2 ? `${address2}, ` : '';
    return `${address1}, ${secondaryLine}${city}, ${state}, ${postalCode}`;
  }

  const onClickHandler = (matchId) => {
    const matchIndex = searchResults.findIndex(({ id }) => matchId === id);
    const match = searchResults[matchIndex];
    const { starred } = match;
    let count = starredCount;

    if (starred) {
      count -= 1;
      match.starred = false;
    } else {
      count += 1;
      match.starred = true;
    }

    put(match).then(({ data }) => {
      updateStarredCount(count);
      
      const updatedResults = searchResults;
      updatedResults.splice(matchIndex, 1, data)
      setSearchResults(updatedResults)
    });
  }

  return (
    <div aria-label="Results" className="search-results-container">
      {searchResults.length ? (
        <>
          {searchResults.map(({ id, type, name, taxonomy, description, productCategory, address, previewText, image, starred }, index) => 
            <Match
              key={id}
              id={id}
              type={type}
              primaryText={name}
              secondaryText={taxonomy?.scientificName || description || productCategory}
              description={readableAddress(address) || previewText}
              image={image}
              starred={starred}
              onClick={() => onClickHandler(id)}
            />
          )}
        </>
      ):(
        <span aria-label="No results" className="no-results">No results to show</span>
      )}
    </div>
  )
};

export default SearchResults;