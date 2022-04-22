import React, { useState } from 'react';

const UserMenu = ({ userData, fetchUserInfo }) => {
  const { avatarUrl, name } = userData;
  const [valueId, setValueId] = useState('');
  const handleChange = e => {
    setValueId(e.target.value);
  };

  const search = event => {
    event.preventDefault();
    fetchUserInfo(valueId);
    setValueId('');
  };

  const message = name ? `Hello, ${name}` : 'Enter your login GITHUB, please';
  return (
    <div className="menu">
      <span className="menu__greeting">{message}</span>
      <img alt="User Avatar" src={avatarUrl} className="menu__avatar" />
      <form className="name-form" onSubmit={search}>
        <input type="text" className="name-form__input" value={valueId} onChange={handleChange} />
        <button className="name-form__btn btn" type="submit">
          Show
        </button>
      </form>
    </div>
  );
};
export default UserMenu;
