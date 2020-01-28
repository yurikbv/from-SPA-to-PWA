import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const profile = await fetch('https://api.github.com/users/yurikbv');
    const profileJSON = await profile.json();
    if (profileJSON) {
      setData({...data, ...profileJSON});
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
      <div className="Profile-container">
        <img className='Profile-avatar' src={data.avatar_url} alt='avatar' />
        <ul>
          <li><strong>html_url:</strong> <a href={data.html_url}>Github URL</a></li>
          <li><strong>repos_url:</strong> {data.repos_url}</li>
          <li><strong>name:</strong> {data.name}</li>
          <li><strong>company:</strong> {data.company}</li>
          <li><strong>location:</strong> {data.location}</li>
          <li><strong>email:</strong> {data.email}</li>
        </ul>
      </div>
  );
};

export default Profile;