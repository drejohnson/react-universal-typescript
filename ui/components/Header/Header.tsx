import * as React from 'react';
import Logo from 'ui/components/Logo';
import Nav from 'ui/components/Nav';
import Toolbar from './styles';

function Header() {
  return (
    <Toolbar>
      <Logo/>
      <Nav />
    </Toolbar>
  );
}

export default Header;
