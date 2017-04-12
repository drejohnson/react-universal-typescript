import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 5px;
  ${media.md`padding: 0 10px;`}
  ${media.xl`padding: 0 20px;`}

  a {
    display: inline-block;
    margin: 0.5em;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Navigation;
