import * as React from 'react';

// Rendering async component for React-Router dynamic routes
const AsyncComponent = (getComponent: () => Promise<any>) =>
  class Async extends React.Component<any, any> {
    public static Component = null;
    public state = { Component: Async.Component };

    public componentDidMount() {
      if (this.state.Component) { return; }

      getComponent().then(Component => {
        Async.Component = Component;
        this.setState({ Component });
      });
    }

    public render() {
      const { Component } = this.state;

      if (Component) {
        return <Component {...this.props} />;
      }

      return null;
    }
  };

export default AsyncComponent;
