import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import BorderCountry from '../components/BorderCountry';

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

      const [dataCountry] = data.map(country => {
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
  } = country;

  const formattedPopulation = population.toLocaleString('de-DE');

  return (
    <section className="container">
      <Link to="/" className="btn-back">
        <button className="btn">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </button>
      </Link>
      <article className="country-detail">
        <div className="country-img-detail">
          <img src={flag} alt={alt} />
        </div>
        <div className="country-desc-detail">
          <h2>{name}</h2>
          <div className="country-detail-wrapper">
            <div className="country-detail-1">
              <p>
                Native Name: <span>{native}</span>
              </p>
              <p>
                Population: <span>{formattedPopulation}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="country-detail-2">
              <p>
                Top Level Domain: <span>{tld}</span>
              </p>
              <p>
                Top Currencies: <span>{currencies}</span>
              </p>
              <p>
                Top Languages: <span>{languages}</span>
              </p>
            </div>
          </div>
          <div className="country-borders">
            <p>
              Border Countries:{' '}
              {borders.map(border => (
                <BorderCountry key={border} border={border} />
              ))}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CountryDetail;
