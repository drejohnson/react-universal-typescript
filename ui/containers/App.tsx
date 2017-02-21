import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle, pure, getContext } from 'recompose';
import * as Helmet from 'react-helmet';

import { configureAnalytics, pageView } from 'ui/utils/configureAnalytics';
import Home from 'ui/pages/Home';
import About from 'ui/pages/About';
import Hello from 'ui/pages/Hello';
import NoMatch from 'ui/pages/NoMatch';
import Header from 'ui/components/Header';

configureAnalytics();

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
        { property: 'og:image:height', content: '200' },
        { name: 'apple-mobile-web-app-title', content: 'PHRESHR' },
        { name: 'application-name', content: 'PHRESHR' },
        { name: 'theme-color', content: '#2980b9' }
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon-icon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-icon-16x16.png', sizes: '16x16' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg' }
      ]}
    />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/hello/:user" component={Hello}/>
      <Route component={NoMatch} />
    </Switch>
  </div>
);

const componentLifecycle = lifecycle({
  componentWillMount() {
    pageView();
  }
});

export default compose(
  componentLifecycle,
  pure
)(App);
