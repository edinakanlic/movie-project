import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm, handleOnSubmit } = useGlobalContext();


  const searchMovie = (e) => {
    const target = e.target.value;
    setSearchTerm(target);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className='search'
        type='text'
        placeholder='Search..'
        value={searchTerm}
        onChange={searchMovie}
      />
    </form>
  );
};

export default SearchForm;
