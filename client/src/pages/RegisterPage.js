import React, { useState } from 'react';
import axios from 'axios';
import '../css/RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/register', { name, email, password });
      localStorage.setItem('token', data.token);
      window.location.href = '/profile';
    } catch (err) {
      setError('Error registering user');
    }
  };

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      {error && <p className="register__error">{error}</p>}
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          className="register__input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="register__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="register__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="register__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;