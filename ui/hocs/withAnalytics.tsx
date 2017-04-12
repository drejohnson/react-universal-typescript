import * as React from 'react';
import { compose, lifecycle } from 'recompose';
import { configureAnalytics, pageView } from '../utils/configureAnalytics';

configureAnalytics();

const enhance = compose(
  lifecycle({
    componentDidMount() {
      pageView();
    },
  }),
);

// TODO: figure out type checking
export default Comp => enhance(props => {
  return <Comp {...props} />;
});
