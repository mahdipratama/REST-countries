import SearchForm from './SearchForm';
import FilterRegion from './FilterRegion';

const SearchBar = () => {
  return (
    <div className="container search-section">
      <SearchForm />
      <FilterRegion />
    </div>
  );
};

export default SearchBar;
