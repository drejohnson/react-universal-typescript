import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {}

const Nav: React.SFC<Props> = () => (
  <nav>
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
  </nav>
);

export default Nav;
