import * as React from 'react';
import { graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import Show from './Show';
import * as SHOWS_QUERY from 'ui/graphql/AllShowsQuery.graphql';

interface Props {
  data;
}

const ShowList: React.SFC<Props> = ({ data: { allShows } }) => (
  <div>
    <h2>Shows:</h2>
    {allShows.map(show =>
      <Show key={show.id} show={show}/>
    )}
  </div>
);

export default compose(
  graphql(SHOWS_QUERY),
  displayLoadingState,
  // flattenProp('data'),
  pure
)(ShowList);
