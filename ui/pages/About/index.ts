import AsyncComponent from 'ui/components/AsyncComponent';

const About = AsyncComponent(() =>
  System.import('./About').then(module => module.default),
);

export default About;
