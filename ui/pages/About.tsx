import * as React from 'react';
import * as Helmet from 'react-helmet';

interface Props {}

const About: React.SFC<Props> = () => (
  <div>
    <Helmet title='About' />
    <h1>About</h1>
  </div>
);

export default About;