import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', data.token);
      window.location.href = '/profile';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      {error && <p className="login__error">{error}</p>}
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
