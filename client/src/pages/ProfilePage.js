import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ProfilePage.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setProfile(data);
      } catch (err) {
        setError('Error fetching profile');
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile">
      <h1 className="profile__title">Profile</h1>
      {error && <p className="profile__error">{error}</p>}
      <div className="profile__info">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Skills Teaching:</strong> {profile.skillsTeaching && profile.skillsTeaching.join(', ')}</p>
        <p><strong>Skills Learning:</strong> {profile.skillsLearning && profile.skillsLearning.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProfilePage;