// SearchSuggestions.js
import React from 'react';
import './SearchSuggestions.css'; 

const SearchSuggestions = ({ suggestions, onItemClick }) => {
  return (
    <div className="search-suggestions">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="suggestion-item" onClick={() => onItemClick(suggestion)}>
          {suggestion.name}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
