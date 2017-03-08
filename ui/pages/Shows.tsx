import * as React from 'react';
import * as Helmet from 'react-helmet';

import ShowList from 'ui/components/ShowList';

interface Props {}

function Shows() {
  return (
    <div>
      <Helmet title="Shows"/>
      <h1>Shows</h1>
      <ShowList />
    </div>
  );
}

export default Shows;
