import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const countryURL = 'https://restcountries.com/v3.1/alpha/';

const BorderCountry = ({ border }) => {
  const [countryData, setCountryData] = useState([]);

  const getBorderCountry = async () => {
    try {
      const response = await fetch(`${countryURL}${border}`);

      if (!response.ok) {
        throw new Error(`Couldn't get country data `);
      }

      const data = await response.json();

      const [dataCountry] = data.map(country => {
        const {
          name: { common },
          cca3,
        } = country;

        return {
          name: common,
          id: cca3,
        };
      });

      setCountryData(dataCountry);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBorderCountry();
  }, [border]);

  const { name, id } = countryData;

  return (
    <Link to={`/country/${id}`}>
      {''}
      <button className="btn btn-borders">{name}</button>
    </Link>
  );
};

export default BorderCountry;
