import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const countryURL = 'https://restcountries.com/v3.1/alpha/';

const CountryDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(null);

  const getCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${countryURL}${id}`);

      if (!response.ok) throw new Error("Couldn't get Country Data");

      const data = await response.json();

      const dataCountry = data.map(country => {
        const {
          flags: { svg, alt },
          name: { common },
          population,
          region,
          subregion,
          capital,
          tld,
        } = country;

        const nativeKey = Object.keys(country.name.nativeName)[0];
        const native = country.name.nativeName[nativeKey].common;

        const currenciesKey = Object.keys(country.currencies)[0];
        const currencies = country.currencies[currenciesKey].name;

        const languages = Object.values(country.languages);

        const borders = country.borders ?? [];

        return {
          flag: svg,
          alt,
          name: common,
          native,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        };
      });

      setCountry(dataCountry);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, [id]);

  if (loading) return <Loading />;

  if (!country) return <h2>no country to display</h2>;

  const {
    flag,
    alt,
    name,
    native,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country[0];

  return (
    <section className="container">
      <Link to="/">
        <button className="back-btn">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </button>
      </Link>
      <article className="country-detail">
        <div className="country-img-detail">
          <img src={flag} alt={alt} />
        </div>
        <div className="country-desc-detail">
          <div className="country-detail-1">
            <h2>{name}</h2>
            <span>Native Name: </span>
            {native}
            <span>Population: </span>
            {population}
            <span>Region: </span>
            {region}
            <span>Sub Region: </span>
            {subregion}
            <span>Capital: </span>
            {capital}
          </div>
          <div className="country-detail-2">
            <span>Top Level Domain: </span>
            {tld}
            <span>Currencies: </span>
            {currencies}
            <span>Languages: </span>
            {languages}
          </div>
          <div className="country-borders">{borders}</div>
        </div>
      </article>
    </section>
  );
};

export default CountryDetail;
