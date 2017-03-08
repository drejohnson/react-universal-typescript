import * as React from 'react';
import { compose, lifecycle, pure, setPropTypes } from 'recompose';
import * as Helmet from 'react-helmet';

const NotFound = () => (
  <div>
    <Helmet title="Page Not Found"/>
    <h1>Page not found</h1>
  </div>
);

const propTypes = {
  history: React.PropTypes.shape({
    staticContext: React.PropTypes.object
  }).isRequired
};

const componentLifecycle = lifecycle({
  componentWillMount() {
    if (this.props.history.staticContext) {
      this.props.history.staticContext.status = 404;
    }
  }
});

export default compose(
  setPropTypes(propTypes),
  componentLifecycle,
  pure
)(NotFound);
