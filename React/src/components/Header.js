import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hovedside</Link></li>
        <li><Link to="/omoss">Om Oss</Link></li>
        <li><Link to="/kontaktoss">Kontakt Oss</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
