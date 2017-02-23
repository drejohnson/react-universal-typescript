import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {}

const Nav: React.SFC<Props> = () => (
  <nav>
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/shows" activeClassName="active">Show</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
    <NavLink to="/oops" activeClassName="active">Oops</NavLink>
  </nav>
);

export default Nav;
