import React from 'react'
import {Link} from 'react-router-dom';

const MenuItem = ({ text, href, active }) => (
  <li className={`nav-item ${active ? 'active' : ''}`}>
    <Link
      className="nav-link"
      to={href}
    >
      { text }
    </Link>
  </li>
);

export default MenuItem;
