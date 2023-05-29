import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavVar() {
  return (
    <ul>
    <li>
      <NavLink to="/">Search</NavLink>
    </li>
    <li>
      <NavLink to="/favourites">Favourites</NavLink>
    </li>
    </ul>
  )
}