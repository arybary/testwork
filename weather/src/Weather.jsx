import React from 'react';
import Days from './Days';

const Weather = ({ dataWeather }) => {
  const { list, city } = dataWeather;
  const dailyData = list.filter(reading => reading.dt_txt.includes('18:00:00'));

  return (
    <main className="main">
      <div className="city">{city.name}</div>
      <div className="days">
        {dailyData.map(day => (
          <Days day={day} key={day.dt} />
        ))}
      </div>
    </main>
  );
};

export default Weather;
