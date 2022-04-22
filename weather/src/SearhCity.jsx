import React, { useState } from 'react';

const SearhCity = ({ fetchWeatherInfo }) => {
  const [city, setCity] = useState('');
  const handleChange = e => {
    setCity(e.target.value);
  };
  const search = event => {
    event.preventDefault();
    fetchWeatherInfo(city);
    setCity('');
  };

  return (
    <div className="menu">
      <span className="tittle">Погода на 5 дней</span>
      <form className="name-form" onSubmit={search}>
        <input
          type="text"
          className="name-form__input"
          value={city}
          onChange={handleChange}
          placeholder="Введите город..."
        />
        <button className="name-form__btn btn" type="submit">
          Show
        </button>
      </form>
    </div>
  );
};
export default SearhCity;
