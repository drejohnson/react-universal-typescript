import * as React from 'react';
import ShowDetail from 'ui/components/ShowDetail';

interface Props {
  match;
}

const Show: React.SFC<Props> = ({match}) => (
  <div>
    <h1>Show</h1>
    <ShowDetail id={match.params.id} />
  </div>
);

export default Show;
