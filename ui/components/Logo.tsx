import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Logo: React.SFC<Props> = () => (
  <div className="branding">
    <Link to="/">
      <img src="/images/logo-yellow.svg" alt="PHRESHR logo"/>
    </Link>
  </div>
);

export default Logo;
