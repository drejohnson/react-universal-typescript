import styled, { css } from 'styled-components';

import { variables } from 'ui/styles/variables';

const {
  breakpoints,
  color,
  font,
  headings,
  transition,
} = variables;

export const media: any = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media only screen and (min-width: ${emSize}rem) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export function aspectRatio(width, height) {
  function ratio() {
    return (height / width);
  }
  return `
    width: 100%;
    position: relative;
    padding-bottom: calc(${ratio()} * 100%);

    > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
  `;
}

// Patterns
export const Collapsable = styled.section`
  opacity: 1;
  display: flex;
  flex-direction: column;
  ${props => props.animate && `
    transition:
      transform 300ms linear,
      opacity 300ms ease-in,
      width 200ms ease-in,
      max-height 200ms ease-in 200ms;
    max-height: 9999px;
    transform: scale(1);
    transform-origin: 100% 100%;

    ${props.collapsed && `
      transform: scale(0);
      transition:
        transform 300ms ease-out,
        opacity 300ms ease-out,
        width 300ms ease-out 600ms;
    `}
  `}

  ${props => props.collapsed && `
    opacity: 0;
    max-height: 0;
  `}
`;
