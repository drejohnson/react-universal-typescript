import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Helmet from 'react-helmet';

import Home from '../pages/Home';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Header from '../components/Header';

interface Props {}

const App: React.SFC<Props> = () => (
  <div>
    <Helmet
      titleTemplate="%s - PHRESHR"
      defaultTitle="PHRESHR"
      meta={[
        { charset: 'utf-8' },
        { name: 'description', content: 'PHRESHR' },
        { property: 'og:site_name', content: 'PHRESHR' },
        { property: 'og:image', content: '' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'PHRESHR' },
        { property: 'og:description', content: 'PHRESHR' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@PHRESHR' },
        { property: 'og:creator', content: '@PHRESHR' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]}
      link={[
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900'}
      ]}
    />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
