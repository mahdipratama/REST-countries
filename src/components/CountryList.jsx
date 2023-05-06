import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context/context';

const CountryList = () => {
  const { filteredCountries, loading } = useGlobalContext();

  if (loading) return <Loading />;

  if (filteredCountries.length < 1)
    return <h2>No countries matched your search criteria</h2>;

  return (
    <section className="container">
      <div className="list-country">
        {filteredCountries.map(country => {
          return <Country key={country.name} {...country} />;
        })}
      </div>
    </section>
  );
};

export default CountryList;
