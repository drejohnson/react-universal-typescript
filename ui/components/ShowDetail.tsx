import * as React from 'react';
import { graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import ShowCard from './ShowCard';
import * as SHOW_QUERY from 'ui/graphql/ShowQuery.graphql';

interface Props {
  Show;
  id;
}

const ShowDetail: React.SFC<Props> = ({ Show, id }) => {
  const show = Show;
  return (
    <div>
      {show &&
        <ShowCard key={show.id} show={show} detail={true}/>
      }
    </div>
  );
};

export default compose(
  graphql(SHOW_QUERY, {
    options: params => ({
      variables: {
        id: params.id
      }
    })
  }),
  displayLoadingState,
  flattenProp('data'),
  pure
)(ShowDetail);
