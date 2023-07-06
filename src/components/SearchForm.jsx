import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value.toLowerCase());
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <div className="form-control">
          <input
            type="text"
            name="country"
            id="country"
            ref={searchValue}
            onChange={searchCountry}
            placeholder="Search for a country ..."
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
