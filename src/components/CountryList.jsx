import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context/context';

const CountryList = () => {
  const { filteredCountries, loading, searchTerm } = useGlobalContext();

  const renderCountry = filteredCountries
    .filter(country => country.name.toLowerCase().includes(searchTerm))
    .map(country => {
      return <Country key={country.id} {...country} />;
    });

  if (loading) return <Loading />;

  if (renderCountry.length < 1)
    return <h2>No countries matched your search criteria</h2>;

  return (
    <section className="container">
      <div className="list-country">{renderCountry}</div>
    </section>
  );
};

export default CountryList;
