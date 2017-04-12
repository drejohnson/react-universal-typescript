import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';

import withHead from 'ui/hocs/withHead';
import withAnalytics from 'ui/hocs/withAnalytics';
import Canvas from './styles';
import Header from 'ui/components/Header';
import Routes from 'ui/components/Routes';

function App() {
  return (
    <Canvas>
      <Header />
      <Routes />
    </Canvas>
  );
}

export default compose(
  withHead,
  withAnalytics,
)(App);
