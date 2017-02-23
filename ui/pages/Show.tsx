import * as React from 'react';
import * as Helmet from 'react-helmet';

interface Props {
  match;
}

const Shows: React.SFC<Props> = ({match}) => (
  <div>
    <Helmet title="Shows" />
    <h1>Show: {match.params.uid}</h1>
  </div>
);

export default Shows;
