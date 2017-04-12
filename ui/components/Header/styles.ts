import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Toolbar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  width: 100%;
  height: 3.75rem;
  padding: 0.3125rem;
  z-index: 999;
  ${media.md`
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
  `}
`;

export default Toolbar;
