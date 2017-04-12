import * as React from 'react';
import { Link } from 'react-router-dom';
import Branding from './styles';
import * as logo from 'ui/static/images/logo.svg';

function Logo() {
  return (
    <Branding className="branding">
      <Link to="/">
        <img src={`${logo}`} alt="React logo"/>
      </Link>
    </Branding>
  );
}

export default Logo;
