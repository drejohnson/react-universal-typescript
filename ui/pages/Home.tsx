import * as React from 'react';
import * as Helmet from 'react-helmet';

interface Props {}

const Home: React.SFC<Props> = () => (
  <div>
    <Helmet title="Home"/>
    <h1>Home</h1>
  </div>
);

export default Home;
