import * as React from 'react';
import { compose, lifecycle, setStatic } from 'recompose';
import { Helmet } from 'react-helmet';

const enhance = compose(
  lifecycle({
    componentDidMount() {
      console.log('Head Did Mount');
    },
  }),
);

// TODO: figure out type checking
export default Comp => enhance(props => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PHRESHR | The Hip-Hop State of Mind</title>
        <meta
          name="description"
          content="React starter for building universal apps with Typescript, Webpack 2, Apollo" />
        <meta property="og:title" content="React Starter Typescript" />
        <meta
          property="og:description"
          content="React starter fo building universal apps with Typescript, Webpack 2, Apollo" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="React Starter Typescript" />
        <meta property="og:image" content="" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:title" content="React Starter Typescript" />
        <meta
          property="twitter:description"
          content="React starter for building universal apps with Typescript, Webpack 2, Apollo" />
        <meta property="twitter:url" content="https://example.com" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="React Starter Typescript" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:creator" content="@ReactStarterTypescript" />
        <meta name="apple-mobile-web-app-title" content="React Starter Typescript" />
        <meta name="application-name" content="React Starter Typescript" />
        <meta name="theme-color" content="#2980b9" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" sizes="32x32" type="image/png" href="/favicon-icon-32x32.png" />
        <link rel="icon" sizes="16x16" type="image/png" href="/favicon-icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <link rel="stylesheet" href="http://vjs.zencdn.net/5.18.4/video-js.css" />
        <script src="http://vjs.zencdn.net/5.18.4/video.min.js" />
      </Helmet>
      <Comp {...props} />
    </div>
  );
});
