import * as React from 'react';
import { branch, renderComponent } from 'recompose';
import { Spinner } from './styles';

function Loading() {
  return (
    <Spinner>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1" />
        <div className="sk-cube sk-cube2" />
        <div className="sk-cube sk-cube3" />
        <div className="sk-cube sk-cube4" />
        <div className="sk-cube sk-cube5" />
        <div className="sk-cube sk-cube6" />
        <div className="sk-cube sk-cube7" />
        <div className="sk-cube sk-cube8" />
        <div className="sk-cube sk-cube9" />
      </div>
    </Spinner>
  );
}

const displayLoadingState = branch(
  props => props.data.loading,
  renderComponent(Loading),
);

export default displayLoadingState;
