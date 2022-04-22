import React, { useState } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

const App = () => {
  const [dataUser, setDataUser] = useState({
    avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
    name: '',
    location: null,
    reposList: [],
  });

  const fetchUserInfo = async userId => {
    const user = await fetch(`https://api.github.com/users/${userId}`);
    const userInfo = await user.json();
    if (!user.ok) {
      return alert(userInfo.message);
    }
    const responce = await fetch(`${userInfo.repos_url}`);
    const reposInfo = await responce.json();
    return setDataUser({
      avatarUrl: userInfo.avatar_url,
      name: userInfo.name,
      location: userInfo.location,
      reposList: reposInfo,
    });
  };

  return (
    <div className="page">
      <header className="header">
        <UserMenu userData={dataUser} fetchUserInfo={fetchUserInfo} />
      </header>
      <UserProfile userData={dataUser} />
    </div>
  );
};

export default App;
