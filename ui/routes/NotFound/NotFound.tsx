import * as React from 'react';
import { compose, lifecycle, pure, getContext } from 'recompose';
import * as Helmet from 'react-helmet';

interface Props {}

const NotFound: React.SFC<Props> = () => (
  <div>
    <Helmet title="Page Not Found"/>
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
)(NotFound);
