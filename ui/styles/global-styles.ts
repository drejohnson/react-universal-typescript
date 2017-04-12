import { injectGlobal } from 'styled-components';

export default injectGlobal`
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  * {
    min-height: 0;
    min-width: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    color: #fefefe;
    background-color: #222;
    font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
  ::selection {
    background: rgba(200,200,255,.1);
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 0.875rem 0;
  }
  p { 
    line-height: 1.6;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  li {
    list-style: none
  }
`;
