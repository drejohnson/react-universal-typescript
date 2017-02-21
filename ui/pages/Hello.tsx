import * as React from 'react';
import * as Helmet from 'react-helmet';

interface Props {
  match;
}

const Hello: React.SFC<Props> = ({match}) => (
  <div>
    <Helmet title="Hello"/>
    <div>
      <h1>Hello {match.params.user}</h1>
    </div>
  </div>
);

export default Hello;
