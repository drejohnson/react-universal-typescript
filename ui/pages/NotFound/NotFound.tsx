import * as React from 'react';
import { compose, lifecycle, pure, setPropTypes } from 'recompose';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

interface StatusProps {
  code;
  children?;
}

const Status = (props: StatusProps) => {
  const { code, children } = props;
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = code;
      }
      return children;
    }} />
  );
};

function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}

export default NotFound;
