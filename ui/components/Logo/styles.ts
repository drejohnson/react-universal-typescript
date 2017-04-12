import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Branding = styled.div`
  width: 60px;
  ${media.md`
    width: 50px;
  `}
`;

export default Branding;
