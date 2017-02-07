import * as React from 'react';
import Logo from './Logo';
import Nav from './Nav';

interface Props {}

const Header: React.SFC<Props> = () => (
  <header>
    <Logo/>
    <Nav />
  </header>
);

export default Header;
