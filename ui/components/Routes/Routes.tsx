import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'ui/pages/Home';
import About from 'ui/pages/About';
import NotFound from 'ui/pages/NotFound';

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
