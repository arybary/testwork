import React, { useState } from 'react';
import Weather from './Weather';
import SearhCity from './SearhCity';

const App = () => {
  const [dataWeather, setDataWeather] = useState(null);

  const fetchWeatherInfo = async city => {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=4d28e79f966a10ef84d070e357029d36`,
    );
    const weatherInfo = await weather.json();

    if (!weather.ok) {
      return alert('not found city');
    }
    return setDataWeather(weatherInfo);
  };
  return (
    <div className="page">
      <header className="header">
        <SearhCity fetchWeatherInfo={fetchWeatherInfo} />
        <a href="http://openweathermap.org/">https://openweathermap.org/</a>
      </header>
      {dataWeather && <Weather dataWeather={dataWeather} />}
    </div>
  );
};

export default App;
