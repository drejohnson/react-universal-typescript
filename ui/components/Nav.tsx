import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Nav: React.SFC<Props> = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Nav;
