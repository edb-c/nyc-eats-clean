import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input       
        type='search'
        placeholder='Search Eateries'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;