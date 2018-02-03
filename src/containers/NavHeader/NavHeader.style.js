import styled from 'styled-components';
import { media } from '../../theme/media';
import { Div } from '../../theme/grid';
import { green } from '../../theme/colors';

export const NavContainer = styled(Div)`
  width: 100%;
  right: 0;
  left: 0;
  height: 84px;
  background-color: ${green};
  margin: 0;
  ${media.tablet`
    height: 76px;  
    right: 0;
    left: 0;
  `}
`;