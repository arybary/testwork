import React from 'react';

const UserProfile = ({ userData }) => {
  const { avatarUrl, name, location, reposList } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
      <ul className="repo-list">
        {reposList.map(repos => (
          <li className="repo-list__item" key={repos.id}>
            <a href={repos.html_url}>{repos.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserProfile;
