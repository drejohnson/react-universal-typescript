import * as React from 'react';

// interface Props {}

// const NoMatch: React.SFC<Props> = () => (
//   <div>
//     <h1>Page not found</h1>
//   </div>
// );

class NoMatch extends React.Component<any, any> {
  static contextTypes = {
    router: React.PropTypes.shape({
      staticContext: React.PropTypes.object
    }).isRequired
  }

  public componentWillMount() {
    if (this.context.router.staticContext) {
      this.context.router.staticContext.status = 404;
    }
  }

  public render() {
    return (
      <div>
        <h1>Page not found</h1>
      </div>
    );
  }
}

export default NoMatch;
