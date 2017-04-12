import AsyncComponent from 'ui/components/AsyncComponent';

const Home = AsyncComponent(() =>
  System.import('./Home').then(module => module.default),
);

export default Home;
