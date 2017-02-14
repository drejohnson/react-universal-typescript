import * as React from 'react';
import { compose, lifecycle, pure, getContext } from 'recompose';

interface Props {}

const NoMatch: React.SFC<Props> = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);

const contextTypes = {
  router: React.PropTypes.shape({
    staticContext: React.PropTypes.object
  })
};

const componentLifecycle = lifecycle({
  componentWillMount() {
    if (this.props.router.staticContext) {
      this.props.router.staticContext.status = 404;
    }
  }
});

export default compose(
  getContext(contextTypes),
  componentLifecycle,
  pure
)(NoMatch);
