import styled from 'styled-components';
import { Wrapper, FixWidthContainer } from '../../theme/grid';
import { media } from '../../theme/media';
import { UnderlineA } from '../../theme/animatedTags';

export const Line = styled(FixWidthContainer)`
  font-size: 1.2em;  
  padding: 15px;
`;

export const ContactWrapper = styled(Wrapper)`
  margin-bottom: 0;
  padding-bottom: 15vh;
`;

export const ContactURL = styled(UnderlineA)`
  font-size: 1.3em; 
  ${media.desktop`
    font-size: 17px;
  `}
`;