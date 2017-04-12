import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Canvas = styled.div`
  flex-direction: column;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 3.75rem;
  ${media.md`
    padding-top: 5rem;
  `}
`;

export default Canvas;
