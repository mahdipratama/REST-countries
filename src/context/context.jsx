import {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
} from 'react';

const searchCountryURL = 'https://restcountries.com/v3.1/name/';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchAllCountry = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${searchCountryURL}${searchTerm}`);

      if (!response.ok) throw new Error('Error Get Countries');

      const data = await response.json();

      const dataCountry = data.map(country => {
        const {
          name: { common },
          capital,
          population,
          region,
          flags: { svg, alt },
        } = country;

        return {
          name: common,
          capital,
          population,
          region,
          flag: svg,
          alt,
        };
      });

      const allRegion = [
        'Filter by Region',
        ...new Set(dataCountry.map(country => country.region)),
      ];

      setCountries(dataCountry);

      setFilteredCountries(dataCountry);

      setRegions(allRegion);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }, [searchTerm]);

  const FilterRegions = region => {
    if (region === 'Filter by Region') {
      setFilteredCountries(countries);
      return;
    }

    const filteredCountries = countries.filter(
      country => country.region === region
    );

    setFilteredCountries(filteredCountries);
  };

  useEffect(() => {
    fetchAllCountry();
  }, [searchTerm, fetchAllCountry]);

  return (
    <AppContext.Provider
      value={{
        loading,
        countries,
        regions,
        filteredCountries,
        FilterRegions,
        setSearchTerm,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
