import React from 'react';
import WeatherData from './WeatherData';
import Loading from './Loading';

const SingleCountry = ({country: {name, flag, population, currencies,languages, capital, region}, weather}) => {
    const formattedLanguage = languages.length > 1 ? "Languages" : "language";
    const formattedCapital = capital !== "" ? (
        <>
            <>{capital}</>
        </>
    ) : ( "" );
  return(
      <div className='country-tab'>
          <div className='flag'>
            <img src = {flag} alt = {name} />
          </div>
          <div className='country-text'>
              <p className='country-name'>{name.toUpperCase()}</p>
                <p><span>Capital: </span>{formattedCapital}</p>
                <p><span>Region: </span>{region}</p>
                <p>
                    <span>{formattedLanguage}: </span>
                    {languages.map(language => language.name).join(", ")}
                </p>
                <p>
                    <span>Currency: </span>   
                        {(currencies || []).map((currency) => currency.name).join(", ")}
                    </p>
                <p>
                    <span>Population: </span>
                    {population.toLocaleString()}
                </p>
                  <p  className='country-weather'>Weather in {capital}</p>
                   {Object.entries(weather).length !== 0 ? (
                    <WeatherData weatherData={weather}/>
                    ) : (
                        <Loading />
                    )}
          </div>
      </div>
  )
};

export default SingleCountry;
