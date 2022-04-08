import React from 'react'

const WeatherData = ({weatherData}) => {
      const source = `https://openweathermap.org/img/wn/${(weatherData.weather)[0].icon}@2x.png`;
  return (
    <>
        <p>
            <span>Temperature: </span>
            {`${weatherData.main.temp} Celsius`}
        </p>
        <p><img src= {source} alt={(weatherData.weather)[0].description} /></p>
        <p>
            <span>Wind: </span>
            {`${weatherData.wind.speed} m/s`}
        </p>
        <p><span>Description: </span> {weatherData.weather[0].description}</p>
    </>
  )
}

export default WeatherData;