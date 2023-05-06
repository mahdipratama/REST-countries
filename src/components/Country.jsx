/* eslint-disable react/prop-types */
const Country = ({ id, name, capital, population, region, flag, alt }) => {
  const formattedPopulation = population.toLocaleString('de-DE');

  return (
    <article className="country" key={id}>
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
    </article>
  );
};

export default Country;
