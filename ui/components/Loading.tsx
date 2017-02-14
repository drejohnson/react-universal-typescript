import * as React from 'react';
import { branch, renderComponent } from 'recompose';

interface Props {}

const Loading: React.SFC<Props> = () => (
  <div>Loading</div>
);

const displayLoadingState = branch(
  props => props.data.loading,
  renderComponent(Loading)
);

export default displayLoadingState;
