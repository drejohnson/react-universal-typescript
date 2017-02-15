const IS_BROWSER = typeof window !== 'undefined';

let ReactGA;
if (IS_BROWSER) {
  ReactGA = require('react-ga');
}

export function configureAnalytics() {
  if (IS_BROWSER) {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
  }
}

export function pageView() {
  if (IS_BROWSER) {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
}
