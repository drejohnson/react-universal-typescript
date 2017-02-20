import * as React from 'react';
import * as Helmet from 'react-helmet';

import EpisodeIndex from 'ui/components/EpisodeIndex';

interface Props {}

const About: React.SFC<Props> = () => (
  <div>
    <Helmet title="About" />
    <h1>About</h1>
    <EpisodeIndex />
  </div>
);

export default About;
