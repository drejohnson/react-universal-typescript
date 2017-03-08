import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import * as Helmet from 'react-helmet';

import { configureAnalytics, pageView } from 'ui/utils/configureAnalytics';
import Home from 'ui/pages/Home';
import About from 'ui/pages/About';
import Shows from 'ui/pages/Shows';
import Show from 'ui/pages/Show';
import Watch from 'ui/pages/Watch';
import NotFound from 'ui/pages/NotFound';
import Header from 'ui/components/Header';

configureAnalytics();

const App: React.SFC<any> = () => (
  <div>
    <Helmet
      titleTemplate="%s - PHRESHR"
      defaultTitle="PHRESHR"
      meta={[
        { charset: 'utf-8' },
        { name: 'description', content: 'PHRESHR' },
        // Facebook OG tags
        { property: 'og:title', content: 'PHRESHR' },
        { property: 'og:description', content: 'PHRESHR' },
        { property: 'og:url', content: 'https://phreshr.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'PHRESHR' },
        { property: 'og:image', content: '' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1280' },
        { property: 'og:image:height', content: '720' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter tags
        { property: 'twitter:title', content: 'PHRESHR' },
        { property: 'twitter:description', content: 'PHRESHR' },
        { property: 'twitter:url', content: 'https://phreshr.com' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: 'phreshr' },
        { property: 'twitter:image', content: '' },
        { property: 'twitter:creator', content: '@PHRESHR' },
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
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
        { rel: 'stylesheet', href: 'http://vjs.zencdn.net/5.8.8/video-js.css' }
      ]}
    />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shows" component={Shows} />
      <Route path="/watch/:id/:uid" component={Watch}/>
      <Route path="/show/:id/:uid" component={Show}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

const componentLifecycle = lifecycle({
  componentWillMount() {
    pageView();
  }
});

export default compose(
  componentLifecycle
)(App);
