import * as React from 'react';
import ShowDetail from 'ui/components/ShowDetail';

interface Props {
  match;
}

function Show({match}) {
  return (
    <div>
      <h1>Show</h1>
      <ShowDetail id={match.params.id} />
    </div>
  );
}

export default Show;
