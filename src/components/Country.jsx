/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Country = ({ id, name, capital, population, region, flag, alt }) => {
  const formattedPopulation = population.toLocaleString('de-DE');

  return (
    <article className="country" key={id}>
      <Link to={`/country/${id}`}>
        <div className="country-img">
          <img src={flag} alt={alt} />
        </div>
        <div className="country-desc">
          <h3>{name}</h3>
          <p>
            Population: <span>{formattedPopulation}</span>
          </p>
          <p>
            Region: <span>{region}</span>{' '}
          </p>
          <p>
            Capital: <span>{capital}</span>{' '}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Country;
