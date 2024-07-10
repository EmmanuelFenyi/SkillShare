

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="header__nav">
//         <ul className="header__list">
//           <li className="header__item"><Link to="/" className="header__link">Home</Link></li>
//           <li className="header__item"><Link to="/login" className="header__link">Login</Link></li>
//           <li className="header__item"><Link to="/register" className="header__link">Register</Link></li>
//           <li className="header__item"><Link to="/profile" className="header__link">Profile</Link></li>
//           <li className="header__item"><Link to="/messages" className="header__link">Messages</Link></li>
//           <li className="header__item"><Link to="/feedback" className="header__link">Feedback</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };



// frontend/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link className="header__link" to="/">Home</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/login">Login</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/register">Register</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/profile">Profile</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/messages">Messages</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

