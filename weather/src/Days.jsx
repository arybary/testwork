import React from 'react';
import moment from 'moment';

const Days = ({ day }) => {
  const { wind, dt_txt, weather, main } = day;

  const dayWeek = moment(dt_txt).format('dddd');

  const data = moment(dt_txt).format('MMMM Do YYYY');

  const imgURL = `owf owf-${weather[0].id} owf-5x icon-style`;

  return (
    <div className="day">
      <div className="day-data">
        <h2>{dayWeek}</h2>
        <h4>{data}</h4>
      </div>
      <h1>{Math.round(main.temp)} °C</h1>
      <i className={imgURL}></i>
      <h2>{weather[0].description}</h2>
      <h3>{`скорость ветра ${wind.speed} м/с`}</h3>
    </div>
  );
};

export default Days;
